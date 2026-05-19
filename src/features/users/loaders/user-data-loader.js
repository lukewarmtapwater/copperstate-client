import { redirect } from "react-router";
import request from "../../../utils/request";

async function UserDataLoader({ params, request: req }) {
  const { userId } = params;
  const url = new URL(req.url);
  const searchParams = url.searchParams.toString();

  const [userRes, inventoryRes] = await Promise.all([
    request(`/users/${userId}`),
    request(`/inventory/?userId=${userId}&${searchParams}`),
  ]);

  if (userRes.ok && inventoryRes.ok) {
    const { user } = await userRes.json();
    const inventory = await inventoryRes.json();
    return { ...inventory, user };
  }

  return redirect("/dashboard");
}

export default UserDataLoader;
