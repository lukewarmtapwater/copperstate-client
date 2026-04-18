import { redirect } from "react-router";
import request from "../../../utils/request";

async function authLoader() {
  const res = await request("/user/me");

  if (res.ok) {
    return redirect("/dashboard");
  }
}

export default authLoader;
