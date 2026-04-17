import Checkbox from "../../components/checkbox";
import Input from "../../components/input";
import DashboardSection from "../../components/dashboard-section";
import Dropdown from "../../components/dropdown";
import { Form, useActionData } from "react-router";
import { useState } from "react";
import Button from "../../components/button";
import DashboardContainer from "../../components/dashboard-container";

function CreateTicket() {
  const data = useActionData();

  return (
    <Form method="post">
      <DashboardContainer
        title="New Ticket"
        description="Submit a ticket and track your request"
      >
        <DashboardSection title="General Information">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <Input type="number" id="year" label="Year" />
              <Input id="make" label="Make" />
              <Input id="model" label="Model" />
            </div>
            <div className="flex gap-3">
              <Input id="location" label="Current Location" />
              <Input type="number" id="daysOnLot" label="Days on Lot" />
            </div>
          </div>
        </DashboardSection>
        <DashboardSection title="Inspection">
          <div className="flex flex-wrap gap-6">
            <DropdownField
              name="windshield"
              text="Windshield"
              options={["Needed", "Not Needed", "Ordered", "Invalid"]}
            />
            <DropdownField
              name="rimDamage"
              text="Rim Damage"
              options={["Light", "Medium", "Severe"]}
            />
            <DropdownField
              name="withCamera"
              text="withCamera"
              options={["Yes", "No"]}
            />
            <DropdownField
              name="upholstery"
              text="Upholstery"
              options={["No Damage", "Medium", "Extreme"]}
            />
          </div>
        </DashboardSection>
        <DashboardSection title="Features">
          <div className="flex flex-wrap gap-6">
            <DropdownField
              name="camera"
              text="Camera"
              options={["Yes", "No"]}
            />
            <DropdownField
              name="steering"
              text="Power Steering"
              options={["Yes", "No"]}
            />
          </div>
        </DashboardSection>

        <Button type="submit" className="w-max mt-4">
          Create Ticket
        </Button>
      </DashboardContainer>
    </Form>
  );
}

function DropdownField({ name, text, error = "", value, options }) {
  const [v, setValue] = useState(value || options[0]);

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h4 className="text-foreground">
          {text} <span className="text-danger">*</span>
        </h4>
        {error && <p className="text-danger text-sm">{error}</p>}
      </div>
      <Dropdown
        name={name}
        value={v}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}

export default CreateTicket;
