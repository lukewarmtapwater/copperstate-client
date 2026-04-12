import { redirect } from "react-router";

async function authLoader() {
  const res = await fetch("http://localhost:3000/user/me", {
    credentials: "include",
  });

  if (res.ok) {
    return redirect("/app");
  }
}

export default authLoader;
