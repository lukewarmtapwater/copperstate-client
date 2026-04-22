import { Form, useActionData } from "react-router";
import Button from "../../../components/button";

function AuthForm({ title, btnContent, link, children }) {
  const data = useActionData();

  return (
    <Form method="post" className="h-full flex flex-col gap-12">
      <h1 className="mr-16 sm:mr-0">{title}</h1>
      <div className="flex flex-col gap-3">
        {children}
        {data?.error && (
          <div className="bg-subtle border border-muted py-3 px-3">
            <p className="text-danger">{data.error}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-3 mt-auto">
        <Button className="w-full py-3" updateNavigationState={true}>
          {btnContent}
        </Button>
        <p>{link}</p>
      </div>
    </Form>
  );
}

export default AuthForm;
