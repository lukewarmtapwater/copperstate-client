async function request(endpoint, { method = "GET", body } = {}) {
  const isFormData = body instanceof FormData;

  const res = await fetch(import.meta.env.VITE_SERVER_URL + endpoint, {
    method,
    credentials: "include",
    headers: isFormData ? {} : { "Content-Type": "application/json" },
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
  });

  return res;
}

export default request;
