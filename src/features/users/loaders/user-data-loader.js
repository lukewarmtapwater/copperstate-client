import { redirect } from "react-router";
import request from "../../../utils/request";

async function UserDataLoader({ params }) {
  const { userId } = params;
  const res = await request(`/users/${userId}`);

  if (res.ok) {
    const userData = await res.json();
    return userData;
  }

  return redirect("/dashboard");
}

export default UserDataLoader;
