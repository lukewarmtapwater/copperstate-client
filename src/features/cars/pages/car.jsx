import { useLoaderData } from "react-router";
import DashboardContainer from "../../../components/dashboard-container";
import DashboardSection from "../../../components/dashboard-section";
import formatDateTime from "../../../utils/formatDateTime";
import {
  RiCalendarView,
  RiCameraLine,
  RiCarLine,
  RiFlagLine,
  RiIdCardLine,
  RiMapPinLine,
  RiSeoLine,
  RiSteering2Line,
  RiUser2Line,
} from "@remixicon/react";
import DataItem from "../../../components/data-item";
import Button from "../../../components/button";

function Car() {
  const car = useLoaderData();

  return (
    <DashboardContainer title="Car Details">
      <DashboardSection title="General Information">
        <DataItem text="Make" Icon={RiCarLine} value={car.make} first={true} />
        <DataItem text="Model" Icon={RiCarLine} value={car.model} />
        <DataItem text="Year" Icon={RiCalendarView} value={car.year} />
        <DataItem
          text="System Assigned ID"
          Icon={RiIdCardLine}
          value={car._id}
        />
        <DataItem
          text="Posted by"
          Icon={RiUser2Line}
          redirect={`/user/${car.postedBy}`}
          value={car.postedBy}
        />
        <DataItem
          text="Created on"
          Icon={RiCalendarView}
          value={formatDateTime(car.createdOn)}
        />
        <DataItem
          text="Location"
          Icon={RiMapPinLine}
          value={car.location}
          last={true}
        />
      </DashboardSection>
      <DashboardSection title="Inspection">
        <DataItem
          text="Rim Damage"
          Icon={RiSeoLine}
          value={car.rimDamage}
          first={true}
        />
        <DataItem
          text="Windshield"
          Icon={RiSeoLine}
          value={car.windshield}
          last={true}
        />
      </DashboardSection>
      <DashboardSection title="Features">
        <DataItem
          text="Camera"
          Icon={RiCameraLine}
          value={car.camera}
          first={true}
        />
        <DataItem
          text="Power Steering"
          Icon={RiSteering2Line}
          value={car.steering}
          last={true}
        />
      </DashboardSection>
      <DashboardSection title="Status" header={<Button>Update Status</Button>}>
        <DataItem
          text="Status"
          Icon={RiFlagLine}
          value="Awaiting Inspection"
          first={true}
        />
        <DataItem
          text="Last Updated"
          Icon={RiCalendarView}
          value="Apr 22, 2026, 4:45 AM"
        />
        <DataItem
          text="Updated By"
          Icon={RiUser2Line}
          value="umairsaeed01x@gmail.com"
          last={true}
        />
      </DashboardSection>
    </DashboardContainer>
  );
}

export default Car;
