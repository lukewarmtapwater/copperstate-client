import Input from "../../../components/input";
import DashboardSection from "../../../components/dashboard-section";
import Dropdown from "../../../components/dropdown";
import { Form } from "react-router";
import { useState } from "react";
import Button from "../../../components/button";
import DashboardContainer from "../../../components/dashboard-container";

function CreateTicket() {
  return (
    <Form method="post">
      <DashboardContainer
        title="New Ticket"
        description="Submit a ticket and track your request."
      >
        <DashboardSection
          title="General Information"
          parentClassName="flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <Input type="number" id="year" label="Year" />
            <Input id="make" label="Make" />
            <Input id="model" label="Model" />
          </div>
          <Input id="location" label="Current Location" />
        </DashboardSection>

        <DashboardSection title="Status">
          <DropdownField
            id="status"
            text="Status"
            options={["Awaiting Inspection", "Inspected"]}
          />
        </DashboardSection>

        <DashboardSection
          title="Inspection"
          parentClassName="flex flex-col gap-3"
        >
          <DropdownField
            id="windshield"
            text="Windshield Damage"
            options={["none", "light", "severe"]}
          />
          <DropdownField
            id="rimDamage"
            text="Rim Damage"
            options={["none", "light", "severe"]}
          />
          <DropdownField
            id="camera"
            text="Camera Issue"
            options={["yes", "no"]}
          />
          <DropdownField
            id="steering"
            text="Power Steering Issue"
            options={["yes", "no"]}
          />
        </DashboardSection>

        <Button updateNavigationState={true}>Create Ticket</Button>
      </DashboardContainer>
    </Form>
  );
}

function DropdownField({ id, text, value, options }) {
  const [v, setValue] = useState(value || options[0]);

  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p>{text}</p>
      </div>
      <Dropdown id={id} value={v} options={options} onChange={setValue} />
    </div>
  );
}

export default CreateTicket;
