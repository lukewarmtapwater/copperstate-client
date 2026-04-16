import { useLoaderData } from "react-router";
import NoAccess from "./no-access";
import DashboardSection from "../../components/dashboard-section";
import Button from "../../components/button";
import Users from "./users";
import NumberBox from "../../components/number-box";

function Dashboard() {
  const user = useLoaderData();

  return (
    <div className="py-4">
      <h1 className="mb-10">DASHBOARD</h1>

      <div className="ml-4">
        <div className="flex gap-3">
          <NumberBox
            title="Employees"
            footer="3 are active at the moment"
            value={5}
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

        {user.role === 0 && <Users />}
        {user.role === 3 && <NoAccess />}
      </div>
    </div>
  );
}

export default Dashboard;
