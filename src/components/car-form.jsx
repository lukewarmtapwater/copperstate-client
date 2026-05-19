import Input from "./input";
import DashboardSection from "./dashboard-section";
import Dropdown from "./dropdown";
import FileInput from "./file-input";
import { RiPlayListAddLine, RiSaveLine } from "@remixicon/react";
import Button from "./button";

function CarForm({ car, isEdit = false }) {

  return (
    <div className="flex flex-col gap-6">
      <DashboardSection title="General Information" className="mt-4">
        <div className="flex gap-3">
          <Input
            id="year"
            label="Year"
            defaultValue={car?.year}
          />
          <Input id="make" label="Make" defaultValue={car?.make} />
          <Input id="model" label="Model" defaultValue={car?.model} />
        </div>
      </DashboardSection>

      <DashboardSection title="Status">
        <Input
          id="location"
          label="Current Location"
          defaultValue={car?.location}
        />
        <DropdownField
          id="status"
          label="Status"
          defaultValue={car?.status}
          options={[
            "Awaiting Inspection",
            "Inspected",
            "At warehouse",
            "Body Shop - Waitlisted",
            "Windshield-awa",
            "Dent shop-waitlisted",
            "At dent shop",
            "Ready for Check-in",
            "Detail Done",
            "Detail Waitlisted",
            "Sold",
          ]}
        />
      </DashboardSection>

      <DashboardSection title="Inspection" className="flex flex-col gap-3">
        <DropdownField
          id="windshield"
          label="Windshield Damage"
          defaultValue={car?.windshield}
          options={["none", "light", "severe"]}
        />
        <DropdownField
          id="rimDamage"
          label="Rim Damage"
          defaultValue={car?.rimDamage}
          options={["none", "light", "severe"]}
        />
        <DropdownField
          id="camera"
          label="Camera Issue"
          defaultValue={car?.camera}
          options={["yes", "no"]}
        />
        <DropdownField
          id="steering"
          label="Power Steering Issue"
          defaultValue={car?.steering}
          options={["yes", "no"]}
        />
      </DashboardSection>

      <DashboardSection title="Images">
        <FileInput id="images" initialImages={car?.images} />
      </DashboardSection>

      <Button updateNavigationState={true} type="submit">
        {isEdit ? "Save Changes" : "Create Ticket"} {isEdit ? <RiSaveLine /> : <RiPlayListAddLine />}
      </Button>
    </div>
  );
}

function DropdownField({ label, ...props }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p>{label}</p>
      </div>
      <Dropdown {...props} />
    </div>
  );
}

export default CarForm;
