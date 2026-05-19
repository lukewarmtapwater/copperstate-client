import { redirect } from "react-router";
import request from "../../../utils/request";

async function inventoryLoader({ request: req }) {
  const url = new URL(req.url);
  const searchParams = url.searchParams.toString();
  const res = await request(`/inventory/?${searchParams}`);

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  return redirect("/login");
}

export default inventoryLoader;
