import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown";
import roles from "../../utils/roles";
import formatDateTime from "../../utils/formatDateTime";
import request from "../../utils/request";
import DashboardSection from "../../components/dashboard-section";

function Users() {
  const [users, setUsers] = useState(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    async function getUsers() {
      const res = await request("/admin/users");
      const result = await res.json();

      if (res.ok) {
        if (result.length) {
          setUsers(result);
        } else {
          setMessage("No Users found.");
        }
      } else {
        setMessage(result.error);
      }
    }

    getUsers();
  }, []);

  return (
    <DashboardSection title="Manage Users">
      <div className="flex flex-col gap-4">
        {users ? (
          users.map((user, i) => <User user={user} key={i} />)
        ) : (
          <h4 className="text-foreground">{message}</h4>
        )}
      </div>
    </DashboardSection>
  );
}

function User({ user }) {
  const [role, setRole] = useState(roles[user.role]);

  async function handleRoleChange(newRole) {
    const previousRole = role;
    setRole(newRole);

    const res = await request("/admin/change-role", {
      method: "POST",
      body: {
        userEmail: user.email,
        role: roles.indexOf(newRole),
      },
    });

    if (!res.ok) {
      setRole(previousRole);
    }
  }

  return (
    <div className="sm:flex justify-between bg-background border border-muted p-6 rounded-md">
      <div className="mb-4 sm:mb-0">
        <h4>{user.email}</h4>
        <div className="mt-4 ml-1">
          <p>Account created on {formatDateTime(user.accountCreated)}</p>
          <p>Last login {formatDateTime(user.lastLogin)}</p>
        </div>
      </div>

      <Dropdown value={role} options={roles} onChange={handleRoleChange} />
    </div>
  );
}

export default Users;
