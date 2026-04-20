import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./features/auth/pages/login";
import SignUp from "./features/auth/pages/sign-up";
import AccountLayout from "./features/auth/layouts/account-layout";
import "./index.css";
import authAction from "./features/auth/actions/auth-action";
import authLoader from "./features/auth/loaders/auth-loader";
import DashboardLayout from "./features/dashboard/layouts/dashboard-layout";
import Dashboard from "./features/dashboard/pages/dashboard";
import Loader from "./components/loader";
import Index from "./features/index";
import Inventory from "./features/inventory/pages/inventory";
import userLoader from "./features/dashboard/loaders/user-loader";
import CreateTicket from "./features/create-ticket/pages/create-ticket";
import ticketAction from "./features/create-ticket/actions/ticket-action";
import inventoryLoader from "./features/inventory/loaders/inventory-loader";
import usersLoader from "./features/dashboard/loaders/users-loader";
import User from "./features/users/pages/user";
import UserDataLoader from "./features/users/loaders/user-data-loader";

const loader = <Loader className="mt-10" />;
const router = createBrowserRouter([
  {
    path: "",
    Component: Index,
  },
  {
    Component: AccountLayout,
    loader: authLoader,
    hydrateFallbackElement: loader,
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
      {
        path: ":userId",
        Component: User,
        loader: UserDataLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
