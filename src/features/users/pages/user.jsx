import { useLoaderData, useRouteLoaderData, useSubmit } from "react-router";
import DashboardSection from "../../../components/dashboard-section";
import DashboardContainer from "../../../components/dashboard-container";
import formatDateTime from "../../../utils/formatDateTime";
import Dropdown from "../../../components/dropdown";
import Car from "../../../components/car";
import DataItem from "../../../components/data-item";
import { useState } from "react";
import {
  RiAdminLine,
  RiCalendarView,
  RiIdCardLine,
  RiMailLine,
} from "@remixicon/react";
import { roles, formatRole } from "../../../utils/roles";

function User() {
  const currentUser = useRouteLoaderData("dashboard-layout");
  const { cars, user } = useLoaderData();
  const submit = useSubmit();

  const [role, setRole] = useState(formatRole(user.role));

  async function handleChange(newRole) {
    await submit(
      { newRole: newRole.toLowerCase(), userId: user.id },
      { method: "PATCH" },
    );
    setRole(newRole);
  }

  return (
    <DashboardContainer title="User Details">
      <DashboardSection
        title="Details"
        className="gap-0"
        header={
          currentUser.role === "admin" && (
            <>
              <Dropdown
                value={role}
                options={roles}
                onChange={handleChange}
                updateNavigationState={true}
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

      <DashboardSection title="Cars Posted">
        {cars.length ? (
          cars.map((car) => <Car car={car} key={car.id} />)
        ) : (
          <p>No cars found.</p>
        )}
      </DashboardSection>
    </DashboardContainer>
  );
}

export default User;
