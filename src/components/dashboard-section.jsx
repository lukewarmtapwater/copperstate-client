import { twMerge } from "tailwind-merge";

// Where to use the className, on the section div or the parent div?
// solution: seperate className props for each div

function DashboardSection({
  title,
  header = <></>,
  footer = "",
  children,
  sectionclassName = "",
  parentClassName = "",
  ...props
}) {
  return (
    <div
      className={`bg-subtle rounded-md px-8 py-8 border border-muted ml-0 ${sectionclassName}`}
      {...props}
    >
      {title && (
        <div className="flex justify-between items-center mb-8">
          <h3>{title}</h3>
          {header}
        </div>
      )}
      <div className={parentClassName}>{children}</div>
      {footer && <p className="mt-2">{footer}</p>}
    </div>
  );
}

export default DashboardSection;
