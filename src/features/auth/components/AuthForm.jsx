import { Form, useActionData } from "react-router";
import Button from "../../../components/button";

function AuthForm({ title, btnText, link, children }) {
  const data = useActionData();

  return (
    <Form method="post" className="w-full h-full flex flex-col gap-8">
      <h1 className="max-w-[350px]">{title}</h1>
      <div className="flex flex-col gap-3">
        {children}
        {data?.error && (
          <div className="bg-muted rounded-md py-1.5 px-3">
            <p className="text-danger">{data.error}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-3 mt-auto">
        <Button
          className="w-full py-2"
          type="submit"
          updateNavigationState={true}
        >
          {btnText}
        </Button>
        <p>{link}</p>
      </div>
    </Form>
  );
}

export default AuthForm;
