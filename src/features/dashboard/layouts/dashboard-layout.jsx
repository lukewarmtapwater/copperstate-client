import { Outlet, useLoaderData } from "react-router";
import Sidebar from "../components/sidebar";
import Logo from "../../../components/logo";
import { useState } from "react";
import { RiMenuLine } from "@remixicon/react";

function DashboardLayout() {
  const user = useLoaderData();
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="flex max-h-screen">
      <Sidebar user={user} sidebar={sidebar} setSidebar={setSidebar} />
      <div className="flex-1 py-8 pl-8 pr-4 overflow-y-scroll">
        <div
          className={`flex ${sidebar ? "justify-center" : "justify-between"}`}
        >
          {!sidebar && (
            <RiMenuLine
              className="left-8 h-8 w-8 cursor-pointer hover:text-primary"
              onClick={() => setSidebar(true)}
            />
          )}
          <Logo />
        </div>

        <div className=" mt-24">
          <Outlet context={{ user }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
