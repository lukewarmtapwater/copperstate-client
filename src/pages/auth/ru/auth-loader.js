import { redirect } from "react-router";

async function authLoader() {
  const res = await fetch("https://copperstate-server.vercel.app/user/me", {
    credentials: "include",
  });

  if (res.ok) {
    return redirect("/app");
  }
}

export default authLoader;
