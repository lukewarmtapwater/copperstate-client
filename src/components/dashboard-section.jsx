import { twMerge } from "tailwind-merge";

function DashboardSection({
  title,
  header = <></>,
  className = "",
  children,
  ...props
}) {
  return (
    <div
      className={twMerge("flex-1 flex flex-col gap-4", className)}
      {...props}
    >
      {title && (
        <div className="flex justify-between items-center">
          <h3>{title}</h3>
          {header}
        </div>
      )}

      {children}
    </div>
  );
}

export default DashboardSection;
