import requestUtil from "../../../utils/request";

async function ChangeRoleAction({ request }) {
  const { newRole, userId } = Object.fromEntries(await request.formData());

  const res = await requestUtil(`/users/${userId}/role`, {
    method: "PATCH",
    body: { newRole },
  });

  if (res.ok) {
    return newRole;
  }

  return;
}

export default ChangeRoleAction;
