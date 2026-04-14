import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/sign-up";
import AccountLayout from "./layouts/account-layout";
import "./index.css";
import authAction from "./pages/auth/ru/auth-action";
import authLoader from "./pages/auth/ru/auth-loader";
import dashboardLoader from "./pages/dashboard/ru/dashboard-loader";
import DashboardLayout from "./layouts/dashboard-layout";
import Dashboard from "./pages/dashboard/dashboard";
import Loader from "./components/loader";

const hydrateFallbackElement = <Loader className="w-10 h-10 mt-10" />;
const router = createBrowserRouter([
  {
    Component: AccountLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
        hydrateFallbackElement,
        loader: authLoader,
        action: authAction,
      },
      {
        path: "sign-up",
        Component: SignUpPage,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
