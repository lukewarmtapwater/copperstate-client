import { Outlet, useLoaderData } from "react-router";
import Sidebar from "../routes/dashboard/sidebar";
import Logo from "../components/logo";

function DashboardLayout() {
  const user = useLoaderData();

  return (
    <div className="flex max-h-screen">
      <Sidebar user={user} />
      <div className="flex-1 py-8 pl-8 pr-4 overflow-y-scroll">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
