import Button from "../../../components/button";
import Dropdown from "../../../components/dropdown";
import DashboardSection from "../../../components/dashboard-section";
import { RiArrowDropRightLine } from "@remixicon/react";
import { useLoaderData } from "react-router";
import formatDateTime from "../../../utils/formatDateTime";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";
import Car from "../../../components/car";

// no issues

function Inventory() {
  const { cars, user } = useLoaderData();
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

      <DashboardSection
        title="Cars in Inventory"
        parentClassName="flex flex-col gap-6"
      >
        {cars.length ? (
          cars.map((car, i) => <Car car={car} key={i} />)
        ) : (
          <p>No cars found.</p>
        )}
      </DashboardSection>
    </DashboardContainer>
  );
}

export default Inventory;
