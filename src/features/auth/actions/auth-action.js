import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

// /users endpoint doesn't sit right.

async function authAction({ request }) {
  const data = Object.fromEntries(await request.formData());
  const endpoint = new URL(request.url).pathname;
  const res = await requestUtil(`/users${endpoint}`, {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    const result = await res.json();
    return result;
  }

  return redirect("/dashboard");
}

export default authAction;
