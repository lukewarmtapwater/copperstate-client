import { redirect } from "react-router";
import request from "../../../utils/request";

// no issues

async function inventoryLoader() {
  const res = await request("/inventory/");

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  return redirect("/dashboard");
}

export default inventoryLoader;
