function DashboardContainer({
  title,
  description = "",
  header = <></>,
  children,
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        {header}
      </div>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default DashboardContainer;
