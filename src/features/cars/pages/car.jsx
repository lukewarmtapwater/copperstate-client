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
  RiMoreLine,
  RiSeoLine,
  RiSteering2Line,
  RiUser2Line,
} from "@remixicon/react";
import DataItem from "../../../components/data-item";
import Dropdown from "../../../components/dropdown";
import Button from "../../../components/button";
import { useState } from "react";
import generateCarReport from "../../../utils/generateCarReport";
import ImageSlider from "../../../components/image-slider";
import Image from "../../../components/image";

function Car() {
  const car = useLoaderData();
  const submit = useSubmit();

  const [status, setStatus] = useState(car.status);
  const [generating, setGenerating] = useState(false);

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
              <RiMoreLine />
            </Button>
          }
        />
      }
    >
      <DashboardSection title="Images">
        <ImageSlider images={car.images} />
      </DashboardSection>
      <DashboardSection
        title="Status"
        className="gap-0"
        header={
          <Dropdown
            id="newStatus"
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
      <DashboardSection title="General Information" className="gap-0">
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
      <DashboardSection title="Inspection" className="gap-0">
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
