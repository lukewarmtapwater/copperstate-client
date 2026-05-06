import { Link, useLoaderData } from "react-router";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";
import Car from "../../../components/car";
import DashboardSection from "../../../components/dashboard-section";
import { RiArrowDropRightLine } from "@remixicon/react";

function Inventory() {
  const { cars } = useLoaderData();

  const createdToday = cars.filter(
    (car) =>
      new Date(car.createdOn).toDateString() === new Date().toDateString(),
  ).length;

  return (
    <DashboardContainer
      title="Inventory"
      description="Keep inventory organized, updated, and easy to manage."
    >
      <NumberBox
        title="Total Cars"
        footer={`${createdToday} car posted today.`}
        value={cars.length}
      />
      <div>
        <Cars cars={cars} />
      </div>
    </DashboardContainer>
  );
}

export function Cars({ cars, showHeader = false }) {
  return (
    <DashboardSection
      title="Inventory"
      header={
        showHeader && (
          <Link className="flex" to="/inventory">
            View All <RiArrowDropRightLine />
          </Link>
        )
      }
    >
      {cars.length ? (
        cars.map((car) => <Car car={car} key={car.id} />)
      ) : (
        <p>No cars found.</p>
      )}
      <p>
        Showing {cars.length} of {cars.length} result(s)
      </p>
    </DashboardSection>
  );
}

export default Inventory;
