import CheckBox from "../../components/checkbox";
import Button from "../../components/button";
import Input from "../../components/input";
import { Form, Link, useActionData } from "react-router";

function SignUp() {
  const data = useActionData();

  return (
    <Form method="post" className="w-full flex flex-col gap-10">
      <h1>CREATE ACCOUNT</h1>
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
        <Input
          id="repeatPassword"
          label="Repeat Password"
          type="password"
          placeholder="********"
        />
      </div>
      {data?.error && (
        <div className="bg-subtle border border-muted py-3 px-3">
          <p className="text-danger">{data.error}</p>
        </div>
      )}
      <div>
        <Button className="w-full">Sign Up</Button>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </Form>
  );
}

export default SignUp;
