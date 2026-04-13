import { useLoaderData } from "react-router";
import UserManager from "./sections/user-manager";
import NoAccess from "./sections/no-access";
import Sidebar from "./sections/sidebar";

function App() {
  const user = useLoaderData();

  return (
    <div className="flex">
      <Sidebar user={user} />

      <div className="flex-1 py-6 pt-12 pl-8 overflow-y-auto">
        <h1>DASHBOARD</h1>
        {user.role === 0 && <UserManager />}
        {user.role === 3 && <NoAccess />}
      </div>
    </div>
  );
}

export default App;
