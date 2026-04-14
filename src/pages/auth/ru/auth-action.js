import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

async function authAction({ request }) {
  const data = Object.fromEntries(await request.formData());
  const endpoint = new URL(request.url).pathname;
  const res = await requestUtil(`/user${endpoint}`, {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    const err = await res.json();
    return { error: err.error };
  }

  return redirect("/dashboard");
}

export default authAction;
