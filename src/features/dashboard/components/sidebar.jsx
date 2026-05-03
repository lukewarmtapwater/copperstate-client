import {
  RiDashboardLine,
  RiFileListLine,
  RiFileAddLine,
  RiArrowDropLeftLine,
  RiLogoutBoxRLine,
} from "@remixicon/react";
import { NavLink, useNavigate } from "react-router";
import Button from "../../../components/button";
import request from "../../../utils/request";

function Sidebar({ user, sidebar, setSidebar }) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await request("/users/logout", { method: "POST" });
    } finally {
      navigate("/login");
    }
  }

  return (
    sidebar && (
      <div className="z-[100] absolute bg-white sm:static w-[260px] h-screen py-6 px-4 border-r border-muted flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFA211] via-[#FF6C00] to-[#D95A0F]"></div>
            <div>
              <h4 className="-mb-[1px]">{user.email.split("@")[0]}</h4>
              <p className="text-xs">{user.role}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={() => setSidebar(false)}>
            <RiArrowDropLeftLine />
          </Button>
        </div>

        <nav className="flex flex-col gap-2 mt-6 [&>h4]:text-xs [&>h4]:text-foreground/50 [&>h4]:my-1">
          <h4>MENU</h4>
          <SidebarButton
            text="Dashboard"
            icon={<RiDashboardLine />}
            to="/dashboard"
          />
          {user.role !== "unassigned" && (
            <>
              <SidebarButton
                text="Inventory"
                icon={<RiFileListLine />}
                to="/inventory"
              />
              <SidebarButton
                text="Create Ticket"
                icon={<RiFileAddLine />}
                to="/create-ticket"
              />
            </>
          )}
        </nav>

        <Button type="button" onClick={handleLogout} className="w-full mt-auto">
          Logout
          <RiLogoutBoxRLine />
        </Button>
      </div>
    )
  );
}

function SidebarButton({ text, icon, to }) {
  return (
    <NavLink to={to} className="hover:no-underline">
      {({ isActive, isPending }) => (
        <Button
          variant="ghost"
          className={`w-full gap-3 py-3
            ${
              isActive
                ? "text-primary hover:bg-primary/10 hover:text-primary"
                : "text-foreground hover:bg-subtle"
            }
            ${!isPending && "justify-start"}
          `}
          loading={isPending}
        >
          {isActive && <div className="w-1 h-4 rounded-full bg-primary"></div>}
          <div className="w-6 h-6 mb-[3px]">{icon}</div>
          {text}
        </Button>
      )}
    </NavLink>
  );
}

export default Sidebar;
