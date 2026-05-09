import { Link, useLoaderData } from "react-router";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";
import Car from "../../../components/car";
import DashboardSection from "../../../components/dashboard-section";
import { RiArrowDropRightLine } from "@remixicon/react";

function Inventory() {
  const { cars, createdToday } = useLoaderData();

  const activeCars = cars.filter(car => car.status !== "Sold");
  const pastCars = cars.filter(car => car.status === "Sold");

  return (
    <DashboardContainer
      title="Inventory"
      description="Keep inventory organized, updated, and easy to manage."
    >
      <div className="flex flex-wrap gap-4">
        <NumberBox
          title="Total Cars"
          footer={`${createdToday} car posted today.`}
          value={activeCars.length}
        />
        <NumberBox
          title="Past Inventory"
          footer="Sold units."
          value={pastCars.length}
        />
      </div>
      <div className="flex flex-col gap-6">
        <Cars cars={activeCars} />
        <Cars title="Past Inventory" cars={pastCars} />
      </div>
    </DashboardContainer>
  );
}

export function Cars({ title = "Inventory", cars, showHeader = false }) {
  return (
    <DashboardSection
      title={title}
      header={
        showHeader && (
          <Link className="flex" to="/inventory">
            View All <RiArrowDropRightLine />
          </Link>
        )
      }
    >
      {cars.length ? (
        <>
          {cars.map((car) => <Car car={car} key={car.id} />)
          }
          <p>
            Showing {cars.length} of {cars.length} result(s)
          </p>
        </>
      ) : (
        <p>No cars found.</p>
      )}
    </DashboardSection>
  );
}

export default Inventory;
