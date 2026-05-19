import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import Button from "../../../components/button";

const headings = [
  {
    path: "/dashboard",
    heading: "Overview"
  },
  {
    path: "/inventory",
    heading: "Inventory"
  },
  {
    path: "/create-ticket",
    heading: "Create Ticket"
  }
]
function TopBar({ sidebar, setSidebar, pathname }) {
  return (
    <div className="w-full py-3 px-3 border-b border-muted flex items-center">
      <Button variant="ghost" onClick={() => setSidebar(!sidebar)}>
        {sidebar ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
      </Button>
      <h4>{headings.find(headingData => headingData.path === pathname)?.heading || pathname}</h4>
      <img
        src="/images/logo.png"
        className="ml-auto w-[140px] sm:w-[150px]"
      />
    </div>
  );
}

export default TopBar;
