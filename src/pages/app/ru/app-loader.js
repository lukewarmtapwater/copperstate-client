import { redirect } from "react-router";

async function appLoader() {
  const res = await fetch("https://copperstate-server.vercel.app/user/me", {
    credentials: "include",
  });

  if (!res.ok) {
    return redirect("/login");
  } else {
    const user = await res.json();
    return user;
  }
}

export default appLoader;
