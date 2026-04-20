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
        "flex flex-col gap-8 bg-subtle shadow-md rounded-md px-8 py-8 border border-muted ml-0",
        sectionclassName,
      )}
      {...props}
    >
      {title && (
        <div className="flex justify-between items-center">
          <h3>{title}</h3>

          <div className="flex items-center gap-2">
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
