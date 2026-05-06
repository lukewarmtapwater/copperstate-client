import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import Button from "../../../components/button";

function TopBar({ sidebar, setSidebar }) {
  return (
    <div className="w-full py-3 px-3 border-b border-muted flex items-center">
      <Button variant="ghost" onClick={() => setSidebar(!sidebar)}>
        {sidebar ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
      </Button>
      <h4>Overview</h4>
    </div>
  );
}

export default TopBar;
