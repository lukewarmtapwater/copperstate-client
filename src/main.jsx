import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/sign-up";
import App from "./pages/app/app";
import AccountLayout from "./layouts/account-layout";
import "./index.css";
import authAction from "./pages/auth/ru/auth-action";
import authLoader from "./pages/auth/ru/auth-loader";
import appLoader from "./pages/app/ru/app-loader";

const router = createBrowserRouter([
  {
    Component: AccountLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
        hydrateFallbackElement: <h4 className="m-4">Loading...</h4>,
        loader: authLoader,
        action: authAction,
      },
      {
        path: "sign-up",
        Component: SignUpPage,
        hydrateFallbackElement: <h4 className="m-4">Loading...</h4>,
        loader: authLoader,
        action: authAction,
      },
    ],
  },
  {
    path: "app",
    loader: appLoader,
    hydrateFallbackElement: <h4 className="m-4">Loading...</h4>,
    Component: App,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
