const SERVER_URL = "http://localhost:3000";

async function request(endpoint, { method = "GET", body } = {}) {
  const res = await fetch(SERVER_URL + endpoint, {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res;
}

export default request;
