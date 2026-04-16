import { twMerge } from "tailwind-merge";

function DashboardSection({ title, footer, children, className, ...props }) {
  return (
    <div
      className={twMerge(
        "bg-subtle rounded-md px-8 py-8 m-3.5 border border-muted ml-0",
        className,
      )}
      {...props}
    >
      {title && <h3 className="text-md mb-8">{title}</h3>}
      {children}
      {footer && <p className="mt-2">{footer}</p>}
    </div>
  );
}

export default DashboardSection;
