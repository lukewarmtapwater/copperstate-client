import request from "../../../utils/request";

// no issues

async function usersLoader() {
  const res = await request("/users/");
  const result = await res.json();

  return result;
}

export default usersLoader;
