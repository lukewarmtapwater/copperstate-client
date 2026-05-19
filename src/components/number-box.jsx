import DashboardSection from "./dashboard-section";

function NumberBox({ title, footer = "", value }) {
  return (
    <DashboardSection
      title={title}
      className="w-full sm:w-max flex-none gap-0 rounded-md p-4 sm:p-6 border border-muted shadow-sm"
    >
      <h1 className="text-primary mt-5">{value}</h1>
      <p>{footer}</p>
    </DashboardSection>
  );
}

export default NumberBox;
