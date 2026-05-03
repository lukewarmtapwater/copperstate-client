import requestUtil from "../../../utils/request";

async function updateStatusAction({ request }) {
  const { carId, newStatus } = Object.fromEntries(await request.formData());

  const res = await requestUtil(`/inventory/${carId}/status`, {
    method: "PATCH",
    body: { newStatus },
  });

  if (res.ok) {
    return newStatus;
  }

  return;
}

export default updateStatusAction;
