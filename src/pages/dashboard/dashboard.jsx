import { useLoaderData } from "react-router";
import UserManager from "./sections/user-manager";
import NoAccess from "./sections/no-access";
import DashboardSection from "../../components/dashboard-section";
import Button from "../../components/button";

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
          <DashboardSection className="pl-6 pr-16">
            <h3 className="text-md mb-8">Employees</h3>
            <h1 className="text-accent">5</h1>
            <p>
              <span className="text-black">3</span> are active right now.
            </p>
          </DashboardSection>
          <DashboardSection className="pl-6 pr-16">
            <h3 className="text-md mb-8">Total Cars</h3>
            <h1 className="text-accent">25</h1>
            <p>
              Increased <span className="text-black">20%</span> from last week
            </p>
          </DashboardSection>

          <DashboardSection className="pl-6 pr-16">
            <h3 className="text-md mb-8">Cars Awaiting Inspection</h3>
            <h1 className="text-accent">13</h1>
            <p>
              Decreased <span className="text-black">50%</span> from yesterday
            </p>
          </DashboardSection>
        </div>

        {user.role === 0 && <UserManager />}
        {user.role === 3 && <NoAccess />}
      </div>
    </div>
  );
}

export default Dashboard;
