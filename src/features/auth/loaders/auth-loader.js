import { redirect } from "react-router";
import request from "../../../utils/request";

// No issues

async function authLoader() {
  const res = await request("/users/me");

  if (res.ok) {
    return redirect("/dashboard");
  }
}

export default authLoader;
