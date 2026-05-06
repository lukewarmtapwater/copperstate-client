import request from "../../../utils/request";
import inventoryLoader from "../../inventory/loaders/inventory-loader";

async function usersLoader() {
  const res = await request("/users/");
  const users = await res.json();
  const { cars } = await inventoryLoader();

  return { users, cars };
}

export default usersLoader;
