import { Outlet } from "react-router";
import Logo from "../../../components/logo";

function AccountLayout() {
  return (
    <div className="min-h-screen h-screen sm:h-max flex justify-center items-center">
      <div className="max-w-[420px] h-full flex flex-col items-center gap-20 border-muted rounded-md px-7 py-10 sm:border sm:m-10">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
