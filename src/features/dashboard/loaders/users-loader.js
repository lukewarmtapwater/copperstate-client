import request from "../../../utils/request";

async function usersLoader() {
  const res = await request("/users/");
  const result = await res.json();

  return result;
}

export default usersLoader;
