import formatDateTime from "../../../utils/formatDateTime";
import ListItem from "../../../components/list-item";
import DashboardSection from "../../../components/dashboard-section";
import { formatRole } from "../../../utils/roles";

function ManageUsers({ users }) {
  return (
    <DashboardSection title="Manage Users">
      {users.length ? (
        users.map((user, i) => <User user={user} key={user.id} />)
      ) : (
        <p>No users found.</p>
      )}
      <p>Showing {users.length} result(s)</p>
    </DashboardSection>
  );
}

function User({ user }) {
  return (
    <ListItem
      title={user.email}
      details={
        <>
          <p>
            Role: <span>{formatRole(user.role)}</span>
          </p>
          <p>
            Last login: <span>{formatDateTime(user.lastLogin)}</span>
          </p>
        </>
      }
      redirect={`/user/${user.id}`}
    />
  );
}

export default ManageUsers;
