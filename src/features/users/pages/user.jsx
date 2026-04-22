import { useLoaderData, useRouteLoaderData, useSubmit } from "react-router";
import DashboardSection from "../../../components/dashboard-section";
import DashboardContainer from "../../../components/dashboard-container";
import formatDateTime from "../../../utils/formatDateTime";
import Dropdown from "../../../components/dropdown";
import roles from "../../../utils/roles";
import Car from "../../../components/car";
import DataItem from "../../../components/data-item";
import { useState } from "react";
import {
  RiAdminLine,
  RiCalendarView,
  RiIdCardLine,
  RiMailLine,
} from "@remixicon/react";

function User() {
  const currentUser = useRouteLoaderData("dashboard-layout");
  const { cars, user } = useLoaderData();
  const submit = useSubmit();
  const [role, setRole] = useState(roles[user.role]);

  async function handleChange(newRole) {
    await submit({ newRole, userId: user._id }, { method: "post" });
    setRole(newRole);
  }

  return (
    <DashboardContainer title="User Details">
      <DashboardSection
        title="Details"
        header={
          currentUser.role === 0 && (
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
          value={user._id}
        />
        <DataItem text="Role" Icon={RiAdminLine} value={roles[user.role]} />
        <DataItem
          text="Created on"
          Icon={RiCalendarView}
          value={formatDateTime(user.accountCreated)}
        />
        <DataItem
          text="Last Login"
          Icon={RiCalendarView}
          value={formatDateTime(user.lastLogin)}
          last={true}
        />
      </DashboardSection>

      <DashboardSection
        title="Cars Posted"
        parentClassName="flex flex-col gap-4"
      >
        {cars.length ? (
          cars.map((car, i) => <Car car={car} key={i} />)
        ) : (
          <p>No cars found.</p>
        )}
      </DashboardSection>
    </DashboardContainer>
  );
}

export default User;
