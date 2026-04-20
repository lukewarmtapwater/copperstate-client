import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

// no issues

async function ticketAction({ request }) {
  const data = Object.fromEntries(await request.formData());
  const res = await requestUtil("/inventory/create", {
    method: "POST",
    body: data,
  });

  if (!res.ok) {
    const result = await res.json();
    return result;
  }

  return redirect("/inventory");
}

export default ticketAction;
