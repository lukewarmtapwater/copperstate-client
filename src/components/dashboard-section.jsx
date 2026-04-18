import { twMerge } from "tailwind-merge";

function DashboardSection({ title, footer, children, className, ...props }) {
  return (
    <div
      className={"bg-subtle rounded-md px-8 py-8 border border-muted ml-0"}
      {...props}
    >
      {title && <h3 className="text-md mb-8">{title}</h3>}
      <div className={className}>{children}</div>
      {footer && <p className="mt-2">{footer}</p>}
    </div>
  );
}

export default DashboardSection;
