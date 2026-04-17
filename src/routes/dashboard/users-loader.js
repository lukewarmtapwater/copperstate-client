import request from "../../utils/request";

async function usersLoader() {
  const res = await request("/admin/users");
  const result = await res.json();

  return result;
}

export default usersLoader;
