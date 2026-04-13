import { Form, useActionData, useNavigation } from "react-router";

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
        <p className="text-center text-red-500 mt-10 mb-3">{data?.error}</p>

        <button className="w-full" type="submit">
          {navigation.state === "submitting" ? "Loading..." : "Submit →"}
        </button>
      </div>
    </Form>
  );
}

export default FormWrapper;
