import {
  useLoaderData,
  useOutletContext,
  useRouteLoaderData,
} from "react-router";
import NoAccess from "./no-access";
import DashboardSection from "../../components/dashboard-section";
import Button from "../../components/button";
import Users from "./users";
import NumberBox from "../../components/number-box";
import DashboardContainer from "../../components/dashboard-container";

function Dashboard() {
  const { user } = useOutletContext();
  const users = useLoaderData();

  return (
    <DashboardContainer
      title="Dashboard"
      description="Manage users and inventory with full system oversight."
    >
      <div className="flex gap-6">
        <NumberBox
          title="Employees"
          value={users.length}
          footer="0 users registered today."
        />
        <NumberBox
          title="Total Cars"
          footer="Increased 20% from last week."
          value={25}
        />

        <NumberBox
          title="Cars Awaiting Inspection"
          footer="Decreased 50% from yesterday."
          value={13}
        />
      </div>

      {user.role === 0 && <Users users={users} />}
      {user.role === 3 && <NoAccess />}
    </DashboardContainer>
  );
}

export default Dashboard;
