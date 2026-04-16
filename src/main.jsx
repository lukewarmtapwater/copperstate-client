import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./routes/login/index";
import SignUp from "./routes/sign-up/index";
import AccountLayout from "./layouts/account-layout";
import "./index.css";
import authAction from "./routes/shared/auth-action";
import authLoader from "./routes/shared/auth-loader";
import dashboardLoader from "./routes/dashboard/dashboard-loader";
import DashboardLayout from "./layouts/dashboard-layout";
import Dashboard from "./routes/dashboard/index";
import Loader from "./components/loader";
import Index from "./routes/index";
import Inventory from "./routes/inventory/index";

const hydrateFallbackElement = <Loader className="mt-10" />;
const router = createBrowserRouter([
  {
    path: "",
    Component: Index,
  },
  {
    Component: AccountLayout,
    children: [
      {
        path: "login",
        Component: Login,
        hydrateFallbackElement,
        loader: authLoader,
        action: authAction,
      },
      {
        path: "sign-up",
        Component: SignUp,
        hydrateFallbackElement,
        loader: authLoader,
        action: authAction,
      },
    ],
  },
  {
    Component: DashboardLayout,
    loader: dashboardLoader,
    hydrateFallbackElement: <h4 className="m-4">Loading...</h4>,
    children: [
      {
        path: "dashboard",
        loader: dashboardLoader,
        hydrateFallbackElement,
        Component: Dashboard,
      },
      {
        path: "inventory",
        hydrateFallbackElement,
        Component: Inventory,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
