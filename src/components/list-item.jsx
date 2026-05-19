import { RiArrowDropRightLine } from "@remixicon/react";
import NavButton from "./nav-button";
import Image from "./image";

function ListItem({ title, footer = <></>, details, redirect, image }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between bg-subtle border border-muted py-5 px-3 rounded-md shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
        {image && (
          <div className="w-full h-40 sm:w-32 sm:h-32 flex-shrink-0">
            <Image image={image} className="w-full h-full object-cover rounded-md border border-primary/20" />
          </div>
        )}
        <div className="flex flex-col gap-3">
          <h4>{title}</h4>
          <div className=" sm:ml-2">{details}</div>
          {footer && <p>{footer}</p>}
        </div>
      </div>
      <NavButton to={redirect}>
        Open Details <RiArrowDropRightLine />
      </NavButton>
    </div>
  );
}

export default ListItem;
