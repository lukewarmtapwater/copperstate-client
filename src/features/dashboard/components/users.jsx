import formatDateTime from "../../../utils/formatDateTime";
import DashboardSection from "../../../components/dashboard-section";
import { RiArrowDropRightLine } from "@remixicon/react";
import NavButton from "../../../components/nav-button";

function Users({ users }) {
  return (
    <DashboardSection
      title="Manage Users"
      parentClassName="flex flex-col gap-4"
    >
      {users.length ? (
        users.map((user, i) => <User user={user} key={i} />)
      ) : (
        <p className="text-foreground">No users found.</p>
      )}
    </DashboardSection>
  );
}

function User({ user }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 bg-background border border-muted py-6 px-4 rounded-md">
      <div>
        <h4>{user.email}</h4>
        <div className="mt-6 ml-2">
          <p>Role: {user.role}</p>
          <p>Last login: {formatDateTime(user.lastLogin)}</p>
        </div>
      </div>
      <NavButton to={`/user/${user.id}`}>
        Open Details <RiArrowDropRightLine />
      </NavButton>
    </div>
  );
}

export default Users;
