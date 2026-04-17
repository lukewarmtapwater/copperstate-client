import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./routes/login/index";
import SignUp from "./routes/sign-up/index";
import AccountLayout from "./layouts/account-layout";
import "./index.css";
import authAction from "./routes/shared/auth-action";
import authLoader from "./routes/shared/auth-loader";
import DashboardLayout from "./layouts/dashboard-layout";
import Dashboard from "./routes/dashboard/index";
import Loader from "./components/loader";
import Index from "./routes/index";
import Inventory from "./routes/inventory/index";
import userLoader from "./routes/dashboard/user-loader";
import CreateTicket from "./routes/create-ticket";
import ticketAction from "./routes/create-ticket/action";
import inventoryLoader from "./routes/inventory/loader";
import usersLoader from "./routes/dashboard/users-loader";

const loader = <Loader className="mt-10" />;
const router = createBrowserRouter([
  {
    path: "",
    Component: Index,
  },
  {
    Component: AccountLayout,
    loader: authLoader,
    children: [
      {
        path: "login",
        Component: Login,
        hydrateFallbackElement: loader,
        action: authAction,
      },
      {
        path: "sign-up",
        Component: SignUp,
        hydrateFallbackElement: loader,
        action: authAction,
      },
    ],
  },
  {
    id: "dashboard-layout",
    Component: DashboardLayout,
    loader: userLoader,
    hydrateFallbackElement: loader,
    children: [
      {
        path: "dashboard",
        hydrateFallbackElement: loader,
        loader: usersLoader,
        Component: Dashboard,
      },
      {
        path: "inventory",
        hydrateFallbackElement: loader,
        loader: inventoryLoader,
        Component: Inventory,
      },
      {
        path: "create-ticket",
        hydrateFallbackElement: loader,
        Component: CreateTicket,
        action: ticketAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
