import DashboardSection from "./dashboard-section";

function NumberBox({ title, footer, value }) {
  return (
    <DashboardSection title={title} footer={footer}>
      <h1 className="text-primary">{value}</h1>
    </DashboardSection>
  );
}

export default NumberBox;
