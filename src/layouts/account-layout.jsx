import { Outlet } from "react-router";
import Logo from "../components/logo";

function AccountLayout() {
  return (
    <div className="flex min-h-screen h-screen sm:h-min justify-center sm:items-center">
      <div className="flex flex-col items-center sm:border border-less-less-light sm:max-w-[420px] sm:m-10 rounded-md px-8 py-12">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
