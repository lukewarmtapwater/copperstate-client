import requestUtil from "../../../utils/request";

async function ChangeRoleAction({ request }) {
  const formData = await request.formData();

  await requestUtil(`/users/${formData.get("userId")}/role`, {
    method: "PATCH",
    body: { newRole: formData.get("newRole") },
  });

  return;
}

export default ChangeRoleAction;
