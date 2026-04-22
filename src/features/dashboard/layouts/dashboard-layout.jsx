import { Outlet, useLoaderData, useLocation } from "react-router";
import Sidebar from "../components/sidebar";
import Logo from "../../../components/logo";
import { useEffect, useState } from "react";
import { RiMenuLine } from "@remixicon/react";
import { useRef } from "react";

function DashboardLayout() {
  const isMobile = window.innerWidth <= 768;

  const user = useLoaderData();
  const [sidebar, setSidebar] = useState(!isMobile);
  const pathname = useLocation();
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    isMobile && setSidebar(false);
  }, [pathname]);

  return (
    <div className="flex max-h-screen">
      <Sidebar user={user} sidebar={sidebar} setSidebar={setSidebar} />
      <div
        className="flex flex-col gap-16 flex-1 py-6 px-5 sm:px-8 overflow-y-scroll overflow-x-hidden"
        ref={ref}
      >
        <div className="flex justify-between items-center py-2">
          <div>
            {!sidebar && (
              <RiMenuLine
                className="w-7 h-7 cursor-pointer hover:text-primary"
                onClick={() => setSidebar(true)}
              />
            )}
          </div>

          <Logo />
        </div>

        <Outlet context={{ user }} />
      </div>
    </div>
  );
}

export default DashboardLayout;
