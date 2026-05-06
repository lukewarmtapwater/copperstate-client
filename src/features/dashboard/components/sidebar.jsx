import {
  RiDashboardLine,
  RiFileListLine,
  RiFileAddLine,
} from "@remixicon/react";
import { NavLink, useSubmit } from "react-router";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { formatRole } from "../../../utils/roles";

function Sidebar({ user, sidebar }) {
  const submit = useSubmit();

  async function handleLogout() {
    submit({}, { method: "post", action: "/dashboard" });
  }

  return (
    sidebar && (
      <div className="z-[100] absolute bg-white sm:static w-[260px] h-screen py-5 px-3 border-r border-muted flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <h4>{user.email.split("@")[0]}</h4>
          <div className="text-xs bg-foreground rounded-full px-2 py-1 text-white">
            {formatRole(user.role)}
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <Input id="search" placeholder="Search..." className="py-2" />
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

        <Button
          type="button"
          onClick={handleLogout}
          className="w-full mt-auto"
          updateNavigationState={true}
        >
          Log out
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
          className={`w-full gap-2
            ${isActive && "text-primary bg-subtle"}
            ${!isPending && "justify-start"}
          `}
          loading={isPending}
        >
          {icon}
          {text}
        </Button>
      )}
    </NavLink>
  );
}

export default Sidebar;
