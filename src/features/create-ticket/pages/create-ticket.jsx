import Checkbox from "../../../components/checkbox";
import Input from "../../../components/input";
import DashboardSection from "../../../components/dashboard-section";
import Dropdown from "../../../components/dropdown";
import { Form, useActionData } from "react-router";
import { useState } from "react";
import Button from "../../../components/button";
import DashboardContainer from "../../../components/dashboard-container";

// repetition, weak component overall.

function CreateTicket() {
  const data = useActionData();

  return (
    <Form method="post">
      <DashboardContainer
        title="New Ticket"
        description="Submit a ticket and track your request"
      >
        <DashboardSection title="General Information">
          <div className="flex gap-3">
            <Input type="number" id="year" label="Year" />
            <Input id="make" label="Make" />
            <Input id="model" label="Model" />
          </div>
          <div className="flex gap-3 mt-3">
            <Input id="location" label="Current Location" />
            <Input type="number" id="daysOnLot" label="Days on Lot" />
          </div>
        </DashboardSection>
        <DashboardSection
          title="Inspection"
          parentClassName="flex flex-wrap gap-6"
        >
          <DropdownField
            id="windshield"
            text="Windshield"
            options={["Needed", "Not Needed", "Ordered"]}
          />
          <DropdownField
            id="rimDamage"
            text="Rim Damage"
            options={["Light", "Medium", "Severe"]}
          />
          <DropdownField
            id="upholstery"
            text="Upholstery"
            options={["Light", "Medium", "Severe"]}
          />
        </DashboardSection>
        <DashboardSection
          title="Features"
          parentClassName="flex flex-wrap gap-6"
        >
          <DropdownField id="camera" text="Camera" options={["Yes", "No"]} />
          <DropdownField
            id="steering"
            text="Power Steering"
            options={["Yes", "No"]}
          />
        </DashboardSection>

        <Button>Create Ticket</Button>
      </DashboardContainer>
    </Form>
  );
}

function DropdownField({ id, text, value, options }) {
  const [v, setValue] = useState(value || options[0]);

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p>{text}</p>
      </div>
      <Dropdown id={id} value={v} options={options} onChange={handleChange} />
    </div>
  );
}

export default CreateTicket;
