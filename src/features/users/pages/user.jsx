import { useLoaderData, useRouteLoaderData, useSubmit } from "react-router";
import DashboardSection from "../../../components/dashboard-section";
import DashboardContainer from "../../../components/dashboard-container";
import formatDateTime from "../../../utils/formatDateTime";
import Dropdown from "../../../components/dropdown";
import DataItem from "../../../components/data-item";
import { useState } from "react";
import Cars from "../../../components/cars";
import {
  RiAdminLine,
  RiCalendarView,
  RiDeleteBinLine,
  RiIdCardLine,
  RiMailLine,
  RiMoreLine
} from "@remixicon/react";
import { roles, formatRole, getKey } from "../../../utils/roles";
import Dialog from "../../../components/dialog";
import Button from "../../../components/button";

function User() {
  const currentUser = useRouteLoaderData("dashboard-layout");
  const { cars, user, pagination } = useLoaderData();
  const submit = useSubmit();

  const [roleDialog, setRoleDialog] = useState({ state: false });
  const [deleteDialog, setDeleteDialog] = useState(false);

  async function confirmRoleChange() {
    const newRoleKey = getKey(roleDialog.newRole);

    await submit({ newRole: newRoleKey, userId: user.id }, { method: "PATCH" });
    setRoleDialog({ state: false });
  }

  return (
    <>
      <DashboardContainer title="User Details"
        header={
          currentUser.role === "admin" &&
          <Dropdown
            options={["Delete User"]}
            onChange={() => setDeleteDialog(true)}
            trigger={
              <Button variant="ghost">
                <RiMoreLine />
              </Button>
            }
          />
        }>
        <DashboardSection
          title="Details"
          className="gap-0"
          header={
            currentUser.role === "admin" && (
              <>
                <Dropdown
                  defaultValue={formatRole(user.role)}
                  options={roles}
                  updateValue={false}
                  onChange={newRole => {
                    if (newRole === formatRole(user.role)) return;
                    setRoleDialog({ state: true, newRole });
                  }}
                />
              </>
            )
          }
        >
          <DataItem
            text="Email"
            Icon={RiMailLine}
            value={user.email}
            first={true}
          />
          <DataItem
            text="System Assigned ID"
            Icon={RiIdCardLine}
            value={user.id}
          />
          <DataItem
            text="Role"
            Icon={RiAdminLine}
            value={formatRole(user.role)}
          />
          <DataItem
            text="Created on"
            Icon={RiCalendarView}
            value={formatDateTime(user.createdOn)}
          />
          <DataItem
            text="Last Login"
            Icon={RiCalendarView}
            value={formatDateTime(user.lastLogin)}
            last={true}
          />
        </DashboardSection>

        <Cars cars={cars} pagination={pagination} showFilter={true} title="Cars Posted" />
      </DashboardContainer>

      <Dialog
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        title="Delete User"
      >
        <p>
          Are you sure you want to delete{" "}
          <span>
            {user.email}
          </span>
          ? This action cannot be undone.
        </p>
        <div className="flex items-center gap-2 justify-end mt-5">
          <Button
            variant="ghost"
            onClick={() => setDeleteDialog(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => submit({ userId: user.id }, { method: "DELETE" })}
            updateNavigationState={true}
          >
            Delete <RiDeleteBinLine />
          </Button>
        </div>
      </Dialog >

      <Dialog
        open={roleDialog.state && roleDialog.newRole}
        onClose={() => setRoleDialog({ state: false })}
        title="Change Role"
      >
        <p>
          Are you sure you want to change this user's role to{" "}
          <span>{roleDialog.newRole}</span>?
        </p>
        <div className="flex items-center gap-2 justify-end mt-5">
          <Button
            variant="ghost"
            onClick={() => setRoleDialog({ state: false })}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={confirmRoleChange}
          >
            Confirm
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default User;
