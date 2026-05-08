import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import formatDateTime from "./formatDateTime";

const PRIMARY = [255, 108, 8];
const GRAY = [100, 100, 100];

function toDataURL(url) {
  return fetch(url, {
    credentials: "include",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Image fetch failed");
      return res.blob();
    })
    .then(
      (blob) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        }),
    );
}

function sectionHeading(doc, label, y) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text(label.toUpperCase(), 14, y);
}

const tableConfig = {
  theme: "grid",
  headStyles: {
    fillColor: PRIMARY,
    textColor: 255,
    fontStyle: "bold",
    fontSize: 9,
  },
  columnStyles: {
    0: { cellWidth: 55, fontStyle: "bold", textColor: [30, 30, 30] },
    1: { cellWidth: "auto" },
  },
  styles: {
    fontSize: 9,
    cellPadding: 3,
    textColor: [50, 50, 50],
  },
  margin: { left: 14, right: 14 },
};

async function pullImage(imageName) {
  const url = `${
    import.meta.env.VITE_SERVER_URL
  }/uploads/${encodeURIComponent(imageName)}`;

  const res = await fetch(url, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Image fetch failed");

  const blob = await res.blob();

  return await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function generateCarReport(car) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  const logoSrc = "/images/logo.png";
  const logoData = await toDataURL(logoSrc);

  const logo = new Image();
  logo.src = logoData;

  await new Promise((r) => (logo.onload = r));

  const logoW = 44;
  const logoH = (logo.height / logo.width) * logoW;
  const logoX = (pageW - logoW) / 2;

  doc.addImage(logoData, "PNG", logoX, 12, logoW, logoH);

  const afterLogo = 12 + logoH + 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(17);
  doc.setTextColor(0, 0, 0);
  doc.text("Car Inspection Report", pageW / 2, afterLogo + 9, {
    align: "center",
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...GRAY);

  doc.text(`${car.year} ${car.make} ${car.model}`, pageW / 2, afterLogo + 16, {
    align: "center",
  });

  doc.text(
    `Generated: ${formatDateTime(new Date().toISOString())}  ·  ID: ${car.id}`,
    pageW / 2,
    afterLogo + 22,
    { align: "center" },
  );

  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.3);
  doc.line(14, afterLogo + 26, pageW - 14, afterLogo + 26);

  let cursor = afterLogo + 33;

  sectionHeading(doc, "Status", cursor);
  autoTable(doc, {
    ...tableConfig,
    startY: cursor + 4,
    head: [["Field", "Value"]],
    body: [
      ["Current Status", car.status],
      ["Last Updated", formatDateTime(car.statusLastUpdated)],
      ["Updated By", String(car.statusUpdatedBy)],
    ],
  });

  cursor = doc.lastAutoTable.finalY + 10;

  sectionHeading(doc, "General Information", cursor);
  autoTable(doc, {
    ...tableConfig,
    startY: cursor + 4,
    head: [["Field", "Value"]],
    body: [
      ["Make", car.make],
      ["Model", car.model],
      ["Year", String(car.year)],
      ["Location", car.location],
      ["Created By", String(car.createdBy)],
      ["Created On", formatDateTime(car.createdOn)],
      ["System ID", String(car.id)],
    ],
  });

  cursor = doc.lastAutoTable.finalY + 10;

  sectionHeading(doc, "Inspection Details", cursor);
  autoTable(doc, {
    ...tableConfig,
    startY: cursor + 4,
    head: [["Field", "Value"]],
    body: [
      ["Rim Damage", car.rimDamage],
      ["Windshield Damage", car.windshield],
      ["Camera Issue", car.camera],
      ["Power Steering Issue", car.steering],
    ],
  });

  cursor = doc.lastAutoTable.finalY + 12;

  if (car.images?.length) {
    sectionHeading(doc, "Images", cursor);

    let y = cursor + 8;
    const maxWidth = 85;
    const maxHeight = 60;
    const gap = 8;

    for (const imageName of car.images) {
      try {
        const imageData = await pullImage(imageName);

        const img = new Image();
        img.src = imageData;

        await new Promise((r) => (img.onload = r));

        let width = maxWidth;
        let height = (img.height / img.width) * width;

        if (height > maxHeight) {
          height = maxHeight;
          width = (img.width / img.height) * height;
        }

        if (y + height > pageH - 20) {
          doc.addPage();
          y = 20;
        }

        doc.addImage(imageData, "JPEG", 14, y, width, height);

        y += height + gap;
      } catch (err) {
        console.log("Failed image:", imageName);
      }
    }
  }

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(180, 180, 180);

  doc.text(
    "This report was automatically generated by Copper State.",
    pageW / 2,
    pageH - 10,
    { align: "center" },
  );

  doc.save(`CopperState-${car.year}-${car.make}-${car.model}-${car.id}.pdf`);
}

export default generateCarReport;
