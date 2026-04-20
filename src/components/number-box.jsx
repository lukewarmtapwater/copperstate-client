import DashboardSection from "./dashboard-section";

// No issues

function NumberBox({ title, footer = "", value }) {
  return (
    <DashboardSection title={title} expandable={false}>
      <h1 className="text-primary mb-2">{value}</h1>
      <p>{footer}</p>
    </DashboardSection>
  );
}

export default NumberBox;
