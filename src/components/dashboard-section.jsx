import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Button from "../components/button";
import { RiArrowUpSLine, RiArrowDownSLine } from "@remixicon/react";

function DashboardSection({
  title,
  header = <></>,
  children,
  expandable = true,
  sectionclassName = "",
  parentClassName = "",
  ...props
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={twMerge(
        "w-full flex flex-col gap-7 bg-subtle shadow-sm rounded-md px-4 py-6 border border-muted",
        sectionclassName,
      )}
      {...props}
    >
      {title && (
        <div className="flex justify-between items-center">
          <h3>{title}</h3>

          <div className="flex items-center gap-1">
            {header}
            {expandable && (
              <Button
                variant="ghost"
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
              </Button>
            )}
          </div>
        </div>
      )}

      {expanded && <div className={parentClassName}>{children}</div>}
    </div>
  );
}

export default DashboardSection;
