import { redirect } from "react-router";
import request from "../../../utils/request";

async function CarLoader({ params }) {
  const { carId } = params;
  const res = await request(`/inventory/${carId}`);

  if (res.ok) {
    const car = await res.json();
    return car;
  }

  return redirect("/inventory");
}

export default CarLoader;
