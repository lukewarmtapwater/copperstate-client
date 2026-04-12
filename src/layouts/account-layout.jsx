import { Outlet } from "react-router";
import Logo from "../components/logo";

function AccountLayout() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center border border-less-less-light max-w-[400px] m-10 rounded-md px-8 py-12">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
