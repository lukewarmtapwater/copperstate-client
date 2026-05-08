import requestUtil from "../../../utils/request";

async function updateStatusAction({ request }) {
  const formData = await request.formData();

  await requestUtil(`/inventory/${formData.get("carId")}/status`, {
    method: "PATCH",
    body: formData,
  });

  return;
}

export default updateStatusAction;
