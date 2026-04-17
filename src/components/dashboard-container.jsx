function DashboardContainer({ title, description, children }) {
  return (
    <div className="flex flex-col gap-6">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default DashboardContainer;
