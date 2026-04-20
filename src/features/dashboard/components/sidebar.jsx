import {
  RiDashboardLine,
  RiSettings3Line,
  RiFileListLine,
  RiFileAddLine,
  RiBarChartLine,
  RiSidebarUnfoldLine,
  RiSidebarFoldLine,
  RiArrowDropLeftLine,
} from "@remixicon/react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate, useNavigation } from "react-router";
import request from "../../../utils/request";
import Button from "../../../components/button";
import roles from "../../../utils/roles";

// no issues

function Sidebar({ user, sidebar, setSidebar }) {
  return (
    sidebar && (
      <div className="z-50 absolute bg-white sm:static w-[260px] h-screen py-8 px-4 border-r border-muted flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFA211] via-[#FF6C00] to-[#D95A0F] "></div>
            <div>
              <h4 className="-mb-1">{user.email.split("@")[0]}</h4>
              <p className="text-sm">{roles[user.role]}</p>
            </div>
          </div>
          <RiArrowDropLeftLine
            className="h-8 w-8 cursor-pointer hover:text-primary"
            onClick={() => setSidebar(false)}
          />
        </div>

        <nav className="flex flex-col gap-2 mt-6 [&>h4]:text-xs [&>h4]:text-foreground/50 [&>h4]:my-2">
          <h4>MENU</h4>
          <SidebarButton
            text="Dashboard"
            icon={<RiDashboardLine />}
            to="/dashboard"
          />
          {user.role !== 3 && (
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
          className={`w-full gap-3
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
          <div className="w-6 h-6 mb-[4px]">{icon}</div>
          {text}
        </Button>
      )}
    </NavLink>
  );
}

export default Sidebar;
