import { redirect } from "react-router";
import request from "../../../utils/request";

async function inventoryLoader() {
  const res = await request("/inventory/");

  if (res.ok) {
    const data = await res.json();
    data.createdToday = data.cars.filter(
      (car) =>
        new Date(car.createdOn).toDateString() === new Date().toDateString(),
    ).length;
    return data;
  }

  return redirect("/dashboard");
}

export default inventoryLoader;
