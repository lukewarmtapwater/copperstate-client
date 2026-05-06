import { Outlet, useLoaderData, useLocation } from "react-router";
import Sidebar from "../components/sidebar";
import { useEffect, useRef, useState } from "react";
import Nav from "../components/top-bar";

function DashboardLayout() {
  const user = useLoaderData();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebar, setSidebar] = useState(!isMobile);
  const pathname = useLocation();
  const ref = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) setSidebar(false);
  }, [isMobile]);

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
      <div className="flex flex-col flex-1 overflow-hidden">
        <Nav sidebar={sidebar} setSidebar={setSidebar} />
        <div
          className="py-10 px-5 overflow-y-scroll overflow-x-hidden"
          ref={ref}
        >
          <Outlet context={{ user }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
