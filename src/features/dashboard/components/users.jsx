import { useEffect, useState } from "react";
import Dropdown from "../../../components/dropdown";
import roles from "../../../utils/roles";
import formatDateTime from "../../../utils/formatDateTime";
import request from "../../../utils/request";
import DashboardSection from "../../../components/dashboard-section";
import Loader from "../../../components/loader";
import Button from "../../../components/button";
import { NavLink } from "react-router";
import { RiArrowDropRightLine } from "@remixicon/react";

// navLink, navigation button issues.

function Users({ users }) {
  return (
    <DashboardSection
      title="Manage Users"
      parentClassName="flex flex-col gap-4"
    >
      {users.length ? (
        users.map((user, i) => <User user={user} key={i} />)
      ) : (
        <h4>No users found.</h4>
      )}
    </DashboardSection>
  );
}

function User({ user }) {
  return (
    <div className="sm:flex justify-between bg-background border border-muted p-6 rounded-md">
      <div>
        <h4>{user.email}</h4>
        <div className="mt-4 ml-1">
          <p>Role: {roles[user.role]}</p>
          <p>Last login {formatDateTime(user.lastLogin)}</p>
        </div>
      </div>

      <NavLink to={`/${user._id}`}>
        <Button>
          Open <RiArrowDropRightLine />
        </Button>
      </NavLink>
    </div>
  );
}

export default Users;
