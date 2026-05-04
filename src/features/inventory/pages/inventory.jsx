import DashboardSection from "../../../components/dashboard-section";
import { useLoaderData } from "react-router";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";
import Car from "../../../components/car";

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
      <DashboardSection
        title="Cars in Inventory"
        parentClassName="flex flex-col gap-4"
      >
        {cars.length ? (
          cars.map((car) => <Car car={car} key={car.id} />)
        ) : (
          <p>No cars found.</p>
        )}
      </DashboardSection>
    </DashboardContainer>
  );
}

export default Inventory;
