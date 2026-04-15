import {
  RiDashboardLine,
  RiSettings3Line,
  RiFileListLine,
  RiFileAddLine,
  RiBarChartLine,
} from "@remixicon/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import request from "../../../utils/request";
import Button from "../../../components/button";
import roles from "../../../utils/roles";

function Sidebar({ user }) {
  return (
    <div className="w-[230px] h-screen py-8 px-5 border-r border-muted flex flex-col">
      <div className="">
        <h4 className="-mb-1">{user.email.split("@")[0]}</h4>
        <p className="text-sm">{roles[user.role]}</p>
      </div>

      <nav className="flex flex-col gap-2 mt-8 [&>h4]:text-xs [&>h4]:text-muted [&>h4]:uppercase [&>h4]:my-3">
        <h4>MENU</h4>
        <SidebarButton
          text="Dashboard"
          icon={<RiDashboardLine />}
          to="/dashboard"
        />
        <SidebarButton text="Create Ticket" icon={<RiFileAddLine />} />
        <SidebarButton text="Inventory" icon={<RiFileListLine />} />
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
    <Link
      to={to}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-sm hover:no-underline
        ${
          isActive
            ? "text-primary bg-primary/10"
            : "text-foreground hover:bg-subtle"
        }`}
    >
      <div className="w-6 h-6 mb-[4px]">{icon}</div>
      <span>{text}</span>
    </Link>
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
