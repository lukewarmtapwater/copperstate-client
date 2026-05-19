import request from "../../../utils/request";

async function dataLoader() {
  const [usersRes, inventoryRes] = await Promise.all([
    request("/users/"),
    request("/inventory/?limit=5"),
  ]);

  let data = { users: [], cars: [], createdToday: 0, totalActiveCars: 0 };

  if (usersRes.ok) {
    data.users = await usersRes.json();
  }

  if (inventoryRes.ok) {
    const res = await inventoryRes.json();
    data.cars = res.cars;
    data.createdToday = res.createdToday;
    data.totalActiveCars = res.pagination.totalCount;
  }

  return data;
}

export default dataLoader;