import { redirect } from "react-router";
import request from "../../../utils/request";

// no issues

async function userLoader() {
  const res = await request("/users/me");

  if (res.ok) {
    return await res.json();
  } else {
    return redirect("/login");
  }
}

export default userLoader;
