import { useLoaderData, useOutletContext } from "react-router";
import NoAccess from "../components/no-access";
import Users from "../components/users";
import NumberBox from "../../../components/number-box";
import DashboardContainer from "../../../components/dashboard-container";

function Dashboard() {
  const { user } = useOutletContext();
  const users = useLoaderData();

  return (
    <DashboardContainer
      title="Welcome!"
      description="Manage users and inventory with full system oversight."
    >
      {user.role === "admin" && (
        <>
          <NumberBox
            title="Employees"
            value={users.length}
            footer="0 users registered today."
          />
          <Users users={users} />
        </>
      )}
      {user.role === "unassigned" && <NoAccess />}
    </DashboardContainer>
  );
}

export default Dashboard;
