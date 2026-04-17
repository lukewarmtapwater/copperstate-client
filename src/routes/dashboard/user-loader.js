import { redirect } from "react-router";
import request from "../../utils/request";

async function userLoader() {
  const res = await request("/user/me");

  if (res.ok) {
    return await res.json();
  } else {
    return redirect("/login");
  }
}

export default userLoader;
