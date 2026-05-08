import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";
import AccountLayout from "./features/auth/layouts/account-layout";
import DashboardLayout from "./features/dashboard/layouts/dashboard-layout";
import Index from "./index";
import "./index.css";
import authAction from "./features/auth/actions/auth-action";
import authLoader from "./features/auth/loaders/auth-loader";
import userLoader from "./features/dashboard/loaders/user-loader";
import dataLoader from "./features/dashboard/loaders/data-loader";
import inventoryLoader from "./features/inventory/loaders/inventory-loader";
import UserDataLoader from "./features/users/loaders/user-data-loader";
import ChangeRoleAction from "./features/users/actions/change-role-action";
import CarLoader from "./features/cars/loaders/car-loader";
import updateStatusAction from "./features/cars/actions/update-status-action";
import ticketAction from "./features/create-ticket/actions/ticket-action";
import Loader from "./components/loader";
import LogOutAction from "./features/dashboard/actions/log-out-action";

const loader = <Loader className="mt-10" />;
const Error = () => {
  return <h4 className="m-3">Oops! Something went wrong.</h4>;
};

const router = createBrowserRouter([
  {
    path: "*",
    Component: function NotFound() {
      return (
        <h4 className="m-3">
          You're lost! <Link to="/">Go back.</Link>
        </h4>
      );
    },
  },
  {
    path: "",
    Component: Index,
  },
  {
    Component: AccountLayout,
    loader: authLoader,
    errorElement: <Error />,
    hydrateFallbackElement: loader,
    children: [
      {
        path: "login",
        lazy: async () => ({
          Component: (await import("./features/auth/pages/login")).default,
        }),
        action: authAction,
        hydrateFallbackElement: loader,
      },
      {
        path: "sign-up",
        lazy: async () => ({
          Component: (await import("./features/auth/pages/sign-up")).default,
        }),
        action: authAction,
        hydrateFallbackElement: loader,
      },
    ],
  },
  {
    id: "dashboard-layout",
    Component: DashboardLayout,
    loader: userLoader,
    errorElement: <Error />,
    shouldRevalidate: ({ formAction, defaultShouldRevalidate }) => {
      if (formAction?.startsWith("/inventory/")) return false;
      return defaultShouldRevalidate;
    },
    hydrateFallbackElement: loader,
    children: [
      {
        path: "dashboard",
        hydrateFallbackElement: loader,
        loader: dataLoader,
        action: LogOutAction,
        lazy: async () => ({
          Component: (await import("./features/dashboard/pages/dashboard"))
            .default,
        }),
      },
      {
        path: "inventory",
        hydrateFallbackElement: loader,
        loader: inventoryLoader,
        lazy: async () => ({
          Component: (await import("./features/inventory/pages/inventory"))
            .default,
        }),
      },
      {
        path: "create-ticket",
        hydrateFallbackElement: loader,
        lazy: async () => ({
          Component: (
            await import("./features/create-ticket/pages/create-ticket")
          ).default,
        }),
        action: ticketAction,
      },
      {
        path: "/user/:userId",
        lazy: async () => ({
          Component: (await import("./features/users/pages/user")).default,
        }),
        action: ChangeRoleAction,
        loader: UserDataLoader,
      },
      {
        path: "/inventory/:carId",
        lazy: async () => ({
          Component: (await import("./features/cars/pages/car")).default,
        }),
        loader: CarLoader,
        action: updateStatusAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={loader} />,
);
