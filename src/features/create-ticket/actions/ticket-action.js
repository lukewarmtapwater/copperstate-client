import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

async function ticketAction({ request }) {
  const res = await requestUtil("/inventory/create", {
    method: "POST",
    body: await request.formData(),
  });

  if (!res.ok) {
    const result = await res.json();
    return result;
  }

  return redirect("/inventory");
}

export default ticketAction;
