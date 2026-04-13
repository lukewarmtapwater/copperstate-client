import roles from "../../../utils/roles";
import Input from "../../../components/input";
import { useState } from "react";
import { useNavigate } from "react-router";

function Sidebar({ user }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function LogOut() {
    setLoading(true);

    const res = await fetch(
      "https://copperstate-server.vercel.app/user/log-out",
      {
        credentials: "include",
      },
    );

    if (res.ok) {
      navigate("/login");
    }
    setLoading(false);
  }
  return (
    <div className="w-[300px] h-screen py-6 px-4 border-r border-gray-300 flex flex-col">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div className="leading-tight">
          <h4>{user.email.split("@")[0]}</h4>
          <p className="text-sm text-gray-500">{roles[user.role]}</p>
        </div>
      </div>

      <Input placeholder="Search..." label={false} className="py-3" />

      <nav className="flex flex-col gap-1 text-less-light mt-4">
        <SidebarButton text="Dashboard" />
        <SidebarButton text="Inventory" />
        <SidebarButton text="Orders" />
        <SidebarButton text="Users" />
        <SidebarButton text="Analytics" />
        <SidebarButton text="Settings" />
      </nav>

      <button onClick={LogOut} className="mt-auto">
        {loading ? "Loading..." : "Log Out"}
      </button>
    </div>
  );
}

function SidebarButton({ text }) {
  return (
    <div className="rounded-md px-4 py-3 hover:bg-[#F6F8FA] cursor-pointer">
      {text}
    </div>
  );
}

export default Sidebar;
