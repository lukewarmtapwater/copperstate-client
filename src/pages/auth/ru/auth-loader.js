import { redirect } from "react-router";

async function authLoader() {
  const res = await fetch("https://copperstateautowholesale.com/user/me", {
    credentials: "include",
  });

  if (res.ok) {
    return redirect("/app");
  }
}

export default authLoader;
