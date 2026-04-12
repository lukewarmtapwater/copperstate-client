import { Form, useActionData, useNavigation } from "react-router";

function FormWrapper({ method = "post", children }) {
  const data = useActionData();
  const navigation = useNavigation();

  return (
    <Form method={method} className="w-full mt-10">
      {children}

      <p className="text-center text-red-500 mt-10 mb-3">{data?.error}</p>

      <button className="w-full" type="submit">
        {navigation.state === "submitting" ? "Loading..." : "Submit →"}
      </button>
    </Form>
  );
}

export default FormWrapper;
