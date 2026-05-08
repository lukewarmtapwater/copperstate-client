import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

async function authAction({ request }) {
  const endpoint = new URL(request.url).pathname;
  const res = await requestUtil(`/users${endpoint}`, {
    method: "POST",
    body: await request.formData(),
  });

  if (!res.ok) {
    const result = await res.json();
    return result;
  }

  return redirect("/dashboard");
}

export default authAction;
