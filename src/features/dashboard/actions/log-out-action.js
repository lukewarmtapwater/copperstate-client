import { redirect } from "react-router";
import request from "../../../utils/request";

async function LogOutAction() {
  const res = await request("/users/logout", { method: "POST" });

  if (res.ok) {
    return redirect("/login");
  }
}

export default LogOutAction;
