import { redirect } from "react-router";

async function appLoader() {
  const res = await fetch("http://localhost:3000/user/me", {
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
