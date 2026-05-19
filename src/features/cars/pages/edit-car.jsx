import { Form, useLoaderData } from "react-router";
import DashboardContainer from "../../../components/dashboard-container";
import CarForm from "../../../components/car-form";

function EditCar() {
  const car = useLoaderData();

  return (
    <Form method="put" encType="multipart/form-data">
      <DashboardContainer
        title={`Edit ${car.year} ${car.make} ${car.model}`}
        description="Update the details or images for this vehicle."
      >
        <CarForm car={car} isEdit={true} />
      </DashboardContainer>
    </Form>
  );
}

export default EditCar;
