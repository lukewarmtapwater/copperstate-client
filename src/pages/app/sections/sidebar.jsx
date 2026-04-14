import {
  RiDashboardLine,
  RiSettings3Line,
  RiFileListLine,
  RiGroupLine,
  RiBarChartLine,
} from "@remixicon/react";
import { useState } from "react";
import { useNavigate } from "react-router";
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
    <div className="w-[300px] h-screen py-6 px-6 border-r border-gray-300 flex flex-col">
      <div className="flex items-center justify-between">
        <h3>{user.email.split("@")[0]}</h3>
        <p className="bg-accent text-black p-1 px-3 rounded-md">Admin</p>
      </div>

      <nav className="flex flex-col gap-1 text-less-light mt-8">
        <h4 className="text-sm text-less-less-light uppercase my-3">MENU</h4>
        <SidebarButton text="Dashboard" icon={<RiDashboardLine />} />
        <SidebarButton text="Inventory" icon={<RiFileListLine />} />
        <SidebarButton text="Manage Users" icon={<RiGroupLine />} />
        <h4 className="text-sm text-less-less-light uppercase my-3">GENERAL</h4>
        <SidebarButton text="Analytics" icon={<RiBarChartLine />} />
        <SidebarButton text="Settings" icon={<RiSettings3Line />} />
      </nav>

      <Button onClick={LogOut} className="mt-auto" loading={loading}>
        Log Out
      </Button>
    </div>
  );
}

function SidebarButton({ text, icon }) {
  return (
    <div className="text-[16px] flex items-center gap-3 rounded-md px-3 py-3.5 hover:bg-[#F6F8FA] cursor-pointer">
      <div className="w-6 h-6 mb-[4px]">{icon}</div>

      <span>{text}</span>
    </div>
  );
}

export default Sidebar;
