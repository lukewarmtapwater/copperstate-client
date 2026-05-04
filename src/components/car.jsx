import { RiArrowDropRightLine } from "@remixicon/react";
import NavButton from "./nav-button";
import { Link } from "react-router";

function Car({ car }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 bg-background border border-muted py-6 px-4 rounded-md">
      <div>
        <h4>
          {car.make} {car.model} {car.year}
        </h4>
        <div className="mt-6 ml-2">
          <p>
            Created by:{" "}
            <Link to={`/user/${car.createdBy}`}>{car.createdBy}</Link>
          </p>
          <p>Location: {car.location}</p>
        </div>
      </div>
      <NavButton to={`/inventory/${car.id}`}>
        Open Details <RiArrowDropRightLine />
      </NavButton>
    </div>
  );
}

export default Car;
