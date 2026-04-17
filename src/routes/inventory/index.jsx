import Button from "../../components/button";
import Dropdown from "../../components/dropdown";
import DashboardSection from "../../components/dashboard-section";
import { RiArrowDropRightLine } from "@remixicon/react";
import { useLoaderData } from "react-router";
import formatDateTime from "../../utils/formatDateTime";
import NumberBox from "../../components/number-box";
import DashboardContainer from "../../components/dashboard-container";

function Inventory() {
  const cars = useLoaderData();
  const today = new Date().toDateString();

  const createdToday = cars.filter(
    (car) => new Date(car.createdOn).toDateString() === today,
  ).length;
  const atTheWarehouse = cars.filter((car) =>
    car.location.toLowerCase().includes("warehouse"),
  ).length;

  return (
    <DashboardContainer
      title="Inventory"
      description="Keep inventory organized, updated, and easy to manage"
    >
      <div className="flex gap-6">
        <NumberBox
          title="Total Cars"
          footer={`${createdToday} car posted today.`}
          value={cars.length}
        />
        <NumberBox
          title="Cars at the Warehouse"
          value={atTheWarehouse}
          footer="It's waiting for you!"
        />
      </div>

      <DashboardSection title="Your Cars" className="flex flex-col gap-6">
        {cars.length ? (
          cars.map((car, i) => <Car car={car} key={i} />)
        ) : (
          <p>No cars found.</p>
        )}
      </DashboardSection>
    </DashboardContainer>
  );
}

function Car({ car }) {
  return (
    <div className="sm:flex justify-between bg-background border border-muted p-6 rounded-md">
      <div className="mb-4 sm:mb-0">
        <h4>
          {car.make} {car.model} {car.year}
        </h4>
        <div className="flex gap-16 mt-4 ml-1">
          <div>
            <h5 className="my-2">General</h5>
            <div className="ml-1">
              <p>ID: {car._id}</p>
              <p>Created on: {formatDateTime(car.createdOn)}</p>
              <p>Location: {car.location}</p>
            </div>
          </div>
          <div>
            <h5 className="my-2">Inspection</h5>
            <div>
              <p>Rim damage: {car.rimDamage}</p>
              <p>Windshield: {car.windshield}</p>
            </div>
          </div>
          <div>
            <h5 className="my-2">Features</h5>
            <div>
              <p>Camera: {car.camera}</p>
              <p>Power Steering: {car.steering}</p>
            </div>
          </div>
        </div>
        <p className="mt-4">
          Posted by <span className="text-black">{car.postedBy}</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Button>
          Open <RiArrowDropRightLine />
        </Button>
      </div>
    </div>
  );
}

export default Inventory;
