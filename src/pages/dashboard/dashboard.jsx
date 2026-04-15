import { useLoaderData } from "react-router";
import NoAccess from "./sections/no-access";
import DashboardSection from "../../components/dashboard-section";
import Button from "../../components/button";
import Users from "./sections/users";

function Dashboard() {
  const user = useLoaderData();

  return (
    <div className="py-4">
      <h1 className="mb-10">DASHBOARD</h1>

      <div className="ml-4">
        <div className="flex gap-3 mb-3.5">
          <Button>Create New Ticket</Button>
          <Button>Go to Inventory</Button>
        </div>

        <div className="flex gap-3">
          <DashboardSection
            title="Employees"
            footer="3 are active at the moment"
          >
            <h1 className="text-primary">5</h1>
          </DashboardSection>

          <DashboardSection
            title="Total Cars"
            footer="Increased 20% from last week."
          >
            <h1 className="text-primary">25</h1>
          </DashboardSection>

          <DashboardSection
            title="Cars Awaiting Inspection"
            footer="Decreased 50% from yesterday."
          >
            <h1 className="text-primary">13</h1>
          </DashboardSection>
        </div>

        {user.role === 0 && <Users />}
        {user.role === 3 && <NoAccess />}
      </div>
    </div>
  );
}

export default Dashboard;
