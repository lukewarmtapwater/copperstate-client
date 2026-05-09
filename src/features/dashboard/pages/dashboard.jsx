import { useLoaderData, useOutletContext } from "react-router";
import NoAccess from "../components/no-access";
import ManageUsers from "../components/manage-users";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";
import { Cars } from "../../../features/inventory/pages/inventory";

function Dashboard() {
  const { user } = useOutletContext();
  const { users, cars, createdToday } = useLoaderData();

  const activeCars = cars.filter(car => {
    if (car.status === "Sold") {
      const daysSinceSold = (new Date() - new Date(car.statusLastUpdated)) / (1000 * 60 * 60 * 24);
      return daysSinceSold <= 7;
    }
    return true;
  });

  return user.role === "unassigned" ? (
    <NoAccess />
  ) : (
    <DashboardContainer
      title="Welcome!"
      description="Manage users and inventory with full system oversight."
    >
      <div className="flex flex-wrap gap-4">
        <NumberBox
          title="Employees"
          value={users.length}
          footer="0 users registered today."
        />
        <NumberBox
          title="Cars in Inventory"
          value={activeCars.length}
          footer={`${createdToday} car posted today.`}
        />
      </div>
      <div className="flex flex-wrap gap-6">
        <ManageUsers users={users} />
        <div className="flex flex-col gap-6 w-full lg:w-[calc(100%-400px-1.5rem)]">
          <Cars cars={activeCars} showHeader={true} />
        </div>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
