import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

async function ticketAction({ request }) {
  const data = Object.fromEntries(await request.formData());
  const formattedData = {
    year: data.year,
    make: data.make,
    model: data.model,
    location: data.location,
    daysOnLot: data.daysOnLot,
    status: data.status,
    inspection: {
      windshield: data.windshield,
      rimDamage: data.rimDamage,
      camera: data.camera,
      steering: data.steering,
      upholstery: data.upholstery,
    },
  };
  const res = await requestUtil("/inventory/create", {
    method: "POST",
    body: formattedData,
  });

  if (!res.ok) {
    const result = await res.json();
    return result;
  }

  return redirect("/inventory");
}

export default ticketAction;
