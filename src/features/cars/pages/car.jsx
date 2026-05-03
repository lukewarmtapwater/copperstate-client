import { useLoaderData, useSubmit } from "react-router";
import DashboardContainer from "../../../components/dashboard-container";
import DashboardSection from "../../../components/dashboard-section";
import formatDateTime from "../../../utils/formatDateTime";
import {
  RiCalendarView,
  RiCameraLine,
  RiCarLine,
  RiFilePdf2Line,
  RiFlagLine,
  RiIdCardLine,
  RiMapPinLine,
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
  const [status, setStatus] = useState(car.status.value);
  const [generating, setGenerating] = useState(false);
  const submit = useSubmit();

  async function handleChange(newStatus) {
    await submit({ newStatus, carId: car._id });
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
        <Button
          type="button"
          variant="outline"
          loading={generating}
          onClick={handleGenerateReport}
        >
          <RiFilePdf2Line className="w-6 h-6" />
          Generate Report
        </Button>
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
          />
        }
      >
        <DataItem
          text="Status"
          Icon={RiFlagLine}
          value={car.status.value}
          first={true}
        />
        <DataItem
          text="Last Updated"
          Icon={RiCalendarView}
          value={formatDateTime(car.status.lastUpdated)}
        />
        <DataItem
          text="Updated By"
          Icon={RiUser2Line}
          value={car.status.updatedBy}
          redirect={`/user/${car.status.updatedBy}`}
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
          value={car.inspection.rimDamage}
          first={true}
        />
        <DataItem
          text="Windshield"
          Icon={RiSeoLine}
          value={car.inspection.windshield}
        />
        <DataItem
          text="Camera"
          Icon={RiCameraLine}
          value={car.inspection.camera}
        />
        <DataItem
          text="Upholstery"
          Icon={RiSeoLine}
          value={car.inspection.upholstery}
        />
        <DataItem
          text="Power Steering"
          Icon={RiSteering2Line}
          value={car.inspection.steering}
          last={true}
        />
      </DashboardSection>
    </DashboardContainer>
  );
}

export default Car;
