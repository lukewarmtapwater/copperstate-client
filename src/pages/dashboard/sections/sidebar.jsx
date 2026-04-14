import {
  RiDashboardLine,
  RiSettings3Line,
  RiFileListLine,
  RiGroupLine,
  RiBarChartLine,
} from "@remixicon/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import request from "../../../utils/request";
import Button from "../../../components/button";

function Sidebar({ user }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function LogOut() {
    setLoading(true);

    const res = await request("/user/log-out");

    if (res.ok) {
      navigate("/login");
    }
    setLoading(false);
  }

  return (
    <div className="w-62 h-screen py-8 px-5 border-r border-accent/40 text-less-light flex flex-col">
      <h4 className="text-[19px] text-center">
        Welcome, <span className="text-black">{user.email.split("@")[0]}</span>.
      </h4>

      <nav className="mt-8">
        <h4 className="text-xs text-less-less-light uppercase my-3">MENU</h4>
        <SidebarButton
          text="Dashboard"
          icon={<RiDashboardLine />}
          to="/dashboard"
        />
        <SidebarButton text="Inventory" icon={<RiFileListLine />} />
        <SidebarButton text="Manage Users" icon={<RiGroupLine />} />
        <h4 className="text-xs text-less-less-light uppercase my-3">GENERAL</h4>
        <SidebarButton text="Analytics" icon={<RiBarChartLine />} />
        <SidebarButton text="Settings" icon={<RiSettings3Line />} />
      </nav>

      <Button onClick={LogOut} className="mt-auto text-black" loading={loading}>
        Log Out
      </Button>
    </div>
  );
}

function SidebarButton({ text, icon, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div
      className={`flex items-center gap-3 rounded-md px-3 py-3.5 hover:bg-[#F5F5F6] cursor-pointer ${isActive && "text-accent"}`}
    >
      {isActive && <div className="w-1 h-3 bg-accent rounded-full"></div>}
      <div className="w-6 h-6 mb-[5px]">{icon}</div>
      {text}
    </div>
  );
}

export default Sidebar;
