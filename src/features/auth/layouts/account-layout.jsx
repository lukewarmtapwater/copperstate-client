import { Outlet, useActionData } from "react-router";
import Logo from "../../../components/logo";

// no issues

function AccountLayout() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center border border-muted max-w-[420px] m-10 rounded-md px-8 py-12">
        <Logo className="mb-14" />
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
