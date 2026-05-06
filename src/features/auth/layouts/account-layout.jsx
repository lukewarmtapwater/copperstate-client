import { Outlet } from "react-router";
import Logo from "../../../components/logo";

function AccountLayout() {
  return (
    <div className="min-h-screen h-screen sm:h-max flex justify-center items-center">
      <div className="max-w-[400px] h-full flex flex-col items-center gap-16 border-muted rounded-lg px-7 py-12 shadow-sm sm:border sm:m-10">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
