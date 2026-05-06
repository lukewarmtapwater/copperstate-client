import { useLoaderData, useOutletContext } from "react-router";
import NoAccess from "../components/no-access";
import ManageUsers from "../components/manage-users";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";
import { Cars } from "../../../features/inventory/pages/inventory";

function Dashboard() {
  const { user } = useOutletContext();
  const { users, cars } = useLoaderData();

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
          value={cars.length}
          footer="32 quit in less than 0.5 seconds."
        />
      </div>
      <div className="flex flex-wrap gap-6">
        <ManageUsers users={users} />
        <Cars cars={cars} showHeader={true} />
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
