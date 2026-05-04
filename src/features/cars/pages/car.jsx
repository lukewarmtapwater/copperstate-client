import { useLoaderData, useSubmit } from "react-router";
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
  RiMore2Line,
  RiSeoLine,
  RiSteering2Line,
  RiUser2Line,
} from "@remixicon/react";
import DataItem from "../../../components/data-item";
import Dropdown from "../../../components/dropdown";
import Button from "../../../components/button";
import { useState } from "react";
import generateCarReport from "../../../utils/generateCarReport";

function Car() {
  const car = useLoaderData();
  const [status, setStatus] = useState(car.status);
  const [generating, setGenerating] = useState(false);
  const submit = useSubmit();

  async function handleChange(newStatus) {
    await submit({ newStatus, carId: car.id }, { method: "PATCH" });
    setStatus(newStatus);
  }

  async function handleGenerateReport() {
    setGenerating(true);
    await generateCarReport(car);
    setGenerating(false);
  }

  return (
    <DashboardContainer
      title="Car Details"
      header={
        <Dropdown
          options={["Generate Report"]}
          onChange={handleGenerateReport}
          align="right"
          trigger={
            <Button type="button" variant="ghost" loading={generating}>
              <RiMore2Line className="w-5 h-5" />
            </Button>
          }
        />
      }
    >
      <DashboardSection
        title="Status"
        header={
          <Dropdown
            id="status"
            value={status}
            options={["Awaiting Inspection", "Inspected"]}
            onChange={handleChange}
            updateNavigationState={true}
          />
        }
      >
        <DataItem
          text="Status"
          Icon={RiFlagLine}
          value={car.status}
          first={true}
        />
        <DataItem
          text="Last Updated"
          Icon={RiCalendarView}
          value={formatDateTime(car.statusLastUpdated)}
        />
        <DataItem
          text="Updated By"
          Icon={RiUser2Line}
          value={car.statusUpdatedBy}
          redirect={`/user/${car.statusUpdatedBy}`}
          last={true}
        />
      </DashboardSection>
      <DashboardSection title="General Information">
        <DataItem text="Make" Icon={RiCarLine} value={car.make} first={true} />
        <DataItem text="Model" Icon={RiCarLine} value={car.model} />
        <DataItem text="Year" Icon={RiCalendarView} value={car.year} />
        <DataItem
          text="System Assigned ID"
          Icon={RiIdCardLine}
          value={car.id}
        />
        <DataItem
          text="Created by"
          Icon={RiUser2Line}
          redirect={`/user/${car.createdBy}`}
          value={car.createdBy}
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
          text="Windshield Damage"
          Icon={RiSeoLine}
          value={car.windshield}
        />
        <DataItem text="Camera Issue" Icon={RiCameraLine} value={car.camera} />
        <DataItem
          text="Power Steering Issue"
          Icon={RiSteering2Line}
          value={car.steering}
          last={true}
        />
      </DashboardSection>
    </DashboardContainer>
  );
}

export default Car;
