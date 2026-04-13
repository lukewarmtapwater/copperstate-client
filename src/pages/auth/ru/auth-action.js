import { redirect } from "react-router";

async function authAction({ request }) {
  const data = Object.fromEntries(await request.formData());
  const endpoint = new URL(request.url).pathname;
  const res = await fetch(
    `https://copperstate-server.vercel.app/user${endpoint}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    },
  );

  if (!res.ok) {
    const err = await res.json();
    return { error: err.error };
  }

  return redirect("/app");
}

export default authAction;
