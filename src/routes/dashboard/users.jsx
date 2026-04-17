import { useEffect, useState } from "react";
import Dropdown from "../../components/dropdown";
import roles from "../../utils/roles";
import formatDateTime from "../../utils/formatDateTime";
import request from "../../utils/request";
import DashboardSection from "../../components/dashboard-section";
import Loader from "../../components/loader";
import Button from "../../components/button";

function Users({ users }) {
  return (
    <DashboardSection title="Manage Users">
      <div className="flex flex-col gap-4">
        {users.length ? (
          users.map((user, i) => <User user={user} key={i} />)
        ) : (
          <h4>No users found.</h4>
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
