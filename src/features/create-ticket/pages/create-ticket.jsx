import { Form } from "react-router";
import DashboardContainer from "../../../components/dashboard-container";
import CarForm from "../../../components/car-form";

function CreateTicket() {
  return (
    <Form method="post" encType="multipart/form-data">
      <DashboardContainer
        title="New Ticket"
        description="Submit a ticket and track your request."
      >
        <CarForm mode="create" />
      </DashboardContainer>
    </Form>
  );
}



export default CreateTicket;
