import Input from "../../../components/input";
import { Form, Link, useActionData } from "react-router";
import Button from "../../../components/button";

function Login() {
  const data = useActionData();

  return (
    <Form method="post" className="w-full flex flex-col gap-10">
      <h1>WELCOME BACK</h1>
      <div>
        <Input
          id="email"
          label="Email Address"
          placeholder="example123@gmail.com"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="********"
        />
        <p className="mt-2">
          Forgot your password? <Link>Click here.</Link>
        </p>
      </div>
      {data?.error && (
        <div className="bg-subtle border border-muted py-3 px-3">
          <p className="text-danger">{data.error}</p>
        </div>
      )}
      <div>
        <Button className="w-full" updateNavigationState={true}>
          Login
        </Button>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/sign-up">Create</Link>
        </p>
      </div>
    </Form>
  );
}

export default Login;
