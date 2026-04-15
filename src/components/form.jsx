import { Form, useActionData, useNavigation } from "react-router";
import Button from "./button";

function FormWrapper({ method = "post", children }) {
  const data = useActionData();
  const navigation = useNavigation();

  return (
    <Form
      method={method}
      className="w-full h-full flex flex-col justify-between"
    >
      {children}
      <div>
        <p className="text-center text-danger mt-14 mb-4">{data?.error}</p>
        <Button loading={navigation.state === "submitting"} className="w-full">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default FormWrapper;
