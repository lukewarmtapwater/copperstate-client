import { Outlet, useLoaderData, useLocation } from "react-router";
import Sidebar from "../components/sidebar";
import { useEffect, useRef, useState } from "react";
import TopBar from "../components/top-bar";

function DashboardLayout() {
  const user = useLoaderData();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebar, setSidebar] = useState(!isMobile);
  const location = useLocation();
  const { pathname } = location;
  const ref = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSidebar(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    ref.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    isMobile && setSidebar(false);
  }, [location]);

  return (
    <div className="flex max-h-screen">
      {isMobile && sidebar && (
        <div
          className="fixed inset-0 bg-foreground/50 z-[90]"
          onClick={() => setSidebar(false)}
        />
      )}
      <Sidebar user={user} sidebar={sidebar} setSidebar={setSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar sidebar={sidebar} setSidebar={setSidebar} pathname={pathname} />
        <div
          className="py-10 px-4 overflow-y-scroll overflow-x-hidden"
          ref={ref}
        >
          <Outlet context={{ user }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
