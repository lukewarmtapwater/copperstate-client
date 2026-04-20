import { RiArrowDropRightLine } from "@remixicon/react";
import formatDateTime from "../utils/formatDateTime";
import Button from "./button";
import { Link } from "react-router";

// repetition, overall a weak component.

function Car({ car }) {
  return (
    <div className="flex justify-between bg-background border border-muted p-6 rounded-md">
      <div>
        <h4>
          {car.make} {car.model} {car.year}
        </h4>
        <div className="flex gap-16 mt-6 ml-1">
          <CarDetails
            title="General"
            data={{
              ID: car._id,
              "Created on": formatDateTime(car.createdOn),
              Location: car.location,
            }}
          />
          <CarDetails
            title="Inspection"
            data={{
              "Rim damage": car.rimDamage,
              Windshield: car.windshield,
            }}
          />
          <CarDetails
            title="Features"
            data={{
              Camera: car.camera,
              "Power Steering": car.steering,
            }}
          />
        </div>

        <p className="mt-6">
          Posted by <Link to={`/${car.postedBy}`}>{car.postedBy}</Link>
        </p>
      </div>

      <Button>
        Open <RiArrowDropRightLine />
      </Button>
    </div>
  );
}

function CarDetails({ title, data }) {
  return (
    <div>
      <h5 className="my-2">{title}</h5>
      <div className="ml-1">
        {Object.entries(data).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Car;
