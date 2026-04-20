import { useLoaderData } from "react-router";
import DashboardSection from "../../../components/dashboard-section";
import DashboardContainer from "../../../components/dashboard-container";
import formatDateTime from "../../../utils/formatDateTime";
import Dropdown from "../../../components/dropdown";
import roles from "../../../utils/roles";
import Button from "../../../components/button";
import Car from "../../../components/car";

function User() {
  const { cars, user } = useLoaderData();

  return (
    <DashboardContainer title={user.email.split("@")[0]}>
      <DashboardSection
        title="Details"
        header={
          <div className="flex gap-3">
            <Dropdown value={"Admin"} options={roles} />
            <Button variant="danger" className="py-2">
              Delete User
            </Button>
          </div>
        }
        parentClassName="text-foreground"
      >
        <p>
          System assigned ID: <span>{user._id}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          Role: <span>{roles[user.role]}</span>
        </p>
        <p>
          Account created on <span>{formatDateTime(user.accountCreated)}</span>
        </p>
        <p>
          Last login <span>{formatDateTime(user.lastLogin)}</span>
        </p>
      </DashboardSection>

      <DashboardSection
        title="Cars in Inventory"
        parentClassName="flex flex-col gap-6"
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
