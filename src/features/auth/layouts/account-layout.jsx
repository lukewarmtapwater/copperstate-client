import { Outlet } from "react-router";

function AccountLayout() {
  return (
    <div className="min-h-screen h-screen sm:h-max flex justify-center items-center">
      <div className="sm:max-w-[350px] h-full flex flex-col items-center gap-14 border-muted rounded-lg px-5 py-10 shadow-sm sm:border sm:m-10">
        <img
          src="/images/logo.png"
          className="w-[160px]"
        />
        <Outlet />
      </div>
    </div>
  );
}

export default AccountLayout;
