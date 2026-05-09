import request from "../../../utils/request";
import inventoryLoader from "../../inventory/loaders/inventory-loader";

async function usersLoader() {
  const res = await request("/users/");
  const users = await res.json();
  const { cars, createdToday } = await inventoryLoader();

  return { users, cars, createdToday };
}

export default usersLoader;
