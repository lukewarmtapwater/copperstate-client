import { RiArrowDropRightLine } from "@remixicon/react";
import NavButton from "./nav-button";

function ListItem({ title, details, redirect }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 bg-subtle border border-muted py-6 px-4 rounded-md">
      <div>
        <h4>{title}</h4>
        <div className="mt-6 ml-2">{details}</div>
      </div>
      <NavButton to={redirect}>
        Open Details <RiArrowDropRightLine />
      </NavButton>
    </div>
  );
}

export default ListItem;
