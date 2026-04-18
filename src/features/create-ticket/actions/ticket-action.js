import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

async function ticketAction({ request }) {
  const data = Object.fromEntries(await request.formData());
  const res = await requestUtil("/inventory/create", {
    method: "POST",
    body: data,
  });
  const result = await res.json();

  if (!res.ok) {
    return result;
  }

  return redirect("/inventory");
}

export default ticketAction;
