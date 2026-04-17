import { useActionData, Form, useNavigation } from "react-router";
import Button from "./button";
import Input from "./input";
import Checkbox from "./checkbox";

function FormWrapper({
  method = "post",
  buttonContent = "Submit",
  className,
  children,
}) {
  const data = useActionData();
  const navigation = useNavigation();

  return (
    <Form method={method} className={`w-full ${className}`}>
      {children}
      <div>
        <p className="text-center text-danger mt-14 mb-4">{data?.error}</p>
        <Button loading={navigation.state === "submitting"} className="w-full">
          {buttonContent}
        </Button>
      </div>
    </Form>
  );
}

export default FormWrapper;
