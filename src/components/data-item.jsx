import { twMerge } from "tailwind-merge";
import { Link } from "react-router";

function DataItem({
  Icon,
  text,
  value,
  first = false,
  last = false,
  redirect = "",
  className = "",
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-muted border-b-0 px-3 py-3",
        first && "rounded-t-md",
        last && "border-b rounded-b-md",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-6 h-6 mb-[2px] text-primary" />
        <p>{text}</p>
      </div>
      {redirect ? (
        <Link to={redirect}>{value}</Link>
      ) : (
        <p className="text-black">{value}</p>
      )}
    </div>
  );
}

export default DataItem;
