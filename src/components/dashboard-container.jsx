function DashboardContainer({ title, description = "", children }) {
  return (
    <div className="flex flex-col gap-5">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default DashboardContainer;
