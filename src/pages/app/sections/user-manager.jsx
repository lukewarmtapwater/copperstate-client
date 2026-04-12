import { useEffect, useState } from "react";
import Dropdown from "../../../components/dropdown";
import roles from "../../../utils/roles";
import formatDateTime from "../../../utils/formatDateTime";

function UserManager() {
  const [users, setUsers] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    async function getUsers() {
      const res = await fetch(
        "https://copperstateautowholesale.com/admin/users",
        {
          credentials: "include",
        },
      );
      const result = await res.json();

      if (res.ok) {
        setUsers(result);
      } else {
        setMessage(result.error);
      }
    }

    getUsers();
  }, []);

  return (
    <div className="bg-[#F6F8FA] rounded-md p-6 py-8">
      <h3 className="mb-4">Manage Users</h3>

      <div className="flex flex-col gap-5">
        {users ? (
          users.map((user, i) => <User user={user} key={i} />)
        ) : (
          <h4 className="text-less-light">{message}</h4>
        )}
      </div>
    </div>
  );
}

function User({ user }) {
  const [role, setRole] = useState(roles[user.role]);

  async function handleRoleChange(newRole) {
    const previousRole = role;
    setRole(newRole);

    const res = await fetch(
      "https://copperstateautowholesale.com/admin/change-role",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userEmail: user.email,
          role: roles.indexOf(newRole),
        }),
      },
    );

    if (!res.ok) {
      setRole(previousRole);
    }
  }

  return (
    <div className="flex justify-between bg-white border border-[#C3C3C3] p-6 rounded-md">
      <div>
        <h4>{user.email}</h4>
        <p className="mt-4">
          Account created on {formatDateTime(user.accountCreated)}
        </p>
        <p>Last login {formatDateTime(user.lastLogin)}</p>
      </div>

      <Dropdown
        placeholder="Change role"
        value={role}
        options={roles}
        onChange={handleRoleChange}
      />
    </div>
  );
}

export default UserManager;
