import requestUtil from "../../../utils/request";

async function userAction({ request }) {
  const formData = await request.formData();

  if (request.method === "PATCH") {
    await requestUtil(`/users/${formData.get("userId")}/role`, {
      method: "PATCH",
      body: { newRole: formData.get("newRole") },
    });

    return;
  }

  if (request.method === "DELETE") {
    await requestUtil(`/users/${formData.get("userId")}`, {
      method: "DELETE"
    })
  }

}

export default userAction;
