import { redirect } from "react-router";
import requestUtil from "../../../utils/request";

async function carAction({ request, params }) {
  const formData = await request.formData();

  if (request.method === "DELETE") {
    const carId = formData.get("carId");

    const res = await requestUtil(`/inventory/${carId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      return redirect("/inventory");
    }

    return;
  }

  if (request.method === "PATCH") {
    await requestUtil(`/inventory/${formData.get("carId")}/status`, {
      method: "PATCH",
      body: formData,
    });

    return;
  }

  if (request.method === "PUT") {
    const res = await requestUtil(`/inventory/${params.carId}`, {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) {
      const result = await res.json();
      return result;
    }

    return redirect(`/inventory/${params.carId}`);
  }

  return;
}

export default carAction;
