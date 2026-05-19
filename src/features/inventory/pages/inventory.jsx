import { useLoaderData, useNavigation } from "react-router";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";
import Loader from "../../../components/loader";
import Cars from "../../../components/cars"

function Inventory() {
  const { cars, createdToday, pagination } = useLoaderData();
  const navigation = useNavigation();

  return (
    <DashboardContainer
      title="Inventory"
      description="Keep inventory organized, updated, and easy to manage."
    >
      <div className="flex flex-wrap gap-4 mt-2">
        <NumberBox
          title="Total Cars"
          footer={`${createdToday} car posted today.`}
          value={pagination?.totalCount || cars.length}
        />
        <NumberBox
          title="Past Inventory"
          footer="Sold units."
          value={4}
        />
      </div>
      {navigation.state === "loading" ? <Loader /> : <Cars cars={cars} pagination={pagination} showFilter={true} />}
    </DashboardContainer>
  );
}

export default Inventory;
