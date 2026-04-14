import { useLoaderData } from "react-router";
import UserManager from "./sections/user-manager";
import NoAccess from "./sections/no-access";
import Sidebar from "./sections/sidebar";
import Logo from "../../components/logo";

function App() {
  const user = useLoaderData();

  return (
    <div className="flex max-h-screen">
      <Sidebar user={user} />

      <div className="flex-1 py-8 pl-8 overflow-y-scroll">
        <div className="flex justify-center mb-16">
          <Logo />
        </div>

        <h1>DASHBOARD</h1>

        <div className="flex gap-6 m-6">
          <div className="bg-[#F5F5F6] w-max rounded-md pl-6 pr-12 py-8">
            <h3 className="text-md mb-8">Employees</h3>
            <h1 className="text-accent">5</h1>
            <p>
              <span className="text-black">3</span> are active right now.
            </p>
          </div>
          <div className="bg-[#F5F5F6] w-max rounded-md pl-6 pr-12 py-8">
            <h3 className="text-md mb-8">Total Cars</h3>
            <h1 className="text-accent">25</h1>
            <p>
              Increased <span className="text-black">20%</span> from last week
            </p>
          </div>
          <div className="bg-[#F5F5F6] w-max rounded-md pl-6 pr-12 py-8">
            <h3 className="text-md mb-8">Cars Awaiting Inspection</h3>
            <h1 className="text-accent">13</h1>
            <p>
              Decreased <span className="text-black">50%</span> from yesterday
            </p>
          </div>
        </div>

        {user.role === 0 && <UserManager />}
        {user.role === 3 && <NoAccess />}
      </div>
    </div>
  );
}

export default App;
