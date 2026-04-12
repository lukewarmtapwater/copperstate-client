import { useLoaderData } from "react-router";
import UserManager from "./sections/user-manager";
import roles from "../../utils/roles";
import NoAccess from "./sections/no-access";

function App() {
  const user = useLoaderData();

  return (
    <div className="px-8">
      <Nav user={user} />

      {user.role === 0 && <UserManager />}
      {user.role === 3 && <NoAccess />}
    </div>
  );
}

function Nav({ user }) {
  return (
    <nav className="flex items-center w-full py-6 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-[50px] h-[50px] rounded-[100%] bg-[#D9D9D9]"></div>
        <div>
          <h4 className="-mb-[4px]">{user.email.split("@")[0]}</h4>
          <p className="text-sm">{roles[user.role]}</p>
        </div>
      </div>
      <img src="/images/logo.png" className="w-[230px] ml-auto mr-4" />
    </nav>
  );
}

export default App;
