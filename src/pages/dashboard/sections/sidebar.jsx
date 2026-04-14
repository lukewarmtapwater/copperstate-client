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
  return (
    <div className="w-62 h-screen py-8 px-5 pr-8 border-r border-gray-300 flex flex-col">
      <h4 className="text-center">
        Welcome, <span className="text-black">{user.email.split("@")[0]}</span>.
      </h4>

      <nav className="mt-8 [&>h4]:text-xs [&>h4]:text-gray-400 [&>h4]:uppercase [&>h4]:my-4">
        <h4>MENU</h4>
        <SidebarButton
          text="Dashboard"
          icon={<RiDashboardLine />}
          to="/dashboard"
        />
        <SidebarButton text="Inventory" icon={<RiFileListLine />} />
        <SidebarButton text="Manage Users" icon={<RiGroupLine />} />
        <h4>GENERAL</h4>
        <SidebarButton text="Analytics" icon={<RiBarChartLine />} />
        <SidebarButton text="Settings" icon={<RiSettings3Line />} />
      </nav>

      <LogOutButton />
    </div>
  );
}

function SidebarButton({ text, icon, to }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div
      className={`flex items-center gap-3 rounded-md px-3 py-3 hover:bg-[#F5F5F6] cursor-pointer ${isActive ? "text-accent" : "text-gray-600"}`}
    >
      {isActive && <div className="w-1 h-3 bg-accent rounded-full"></div>}
      <div className="w-6 h-6 mb-[5px]">{icon}</div>
      {text}
    </div>
  );
}

function LogOutButton() {
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
    <Button onClick={LogOut} className="mt-auto" loading={loading}>
      Log Out
    </Button>
  );
}

export default Sidebar;
