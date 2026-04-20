import requestUtil from "../../../utils/request";
import roles from "../../../utils/roles";

async function ChangeRoleAction({ request }) {
  const { newRole, userId } = Object.fromEntries(await request.formData());

  const res = await requestUtil("/users/change-role", {
    method: "POST",
    body: {
      userId,
      role: roles.indexOf(newRole),
    },
  });

  if (res.ok) {
    return newRole;
  }

  return;
}

export default ChangeRoleAction;
