import { twMerge } from "tailwind-merge";

function DashboardContainer({
  title,
  description = "",
  header = <></>,
  className = "",
  children,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h1>{title}</h1>
        {header}
      </div>
      <p>{description}</p>
      <div className={twMerge("flex flex-col gap-8", className)}>
        {children}
      </div>
    </div>
  );
}

export default DashboardContainer;
