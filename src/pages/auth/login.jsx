import Input from "../../components/input";
import { Link } from "react-router";
import Form from "../../components/form";

function LoginPage() {
  return (
    <>
      <h1 className="mt-14">WELCOME BACK</h1>
      <Form>
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
        <p>
          Forgot your password? <Link>Click here.</Link>
        </p>
      </Form>
      <p className="mt-3">
        Don't have an account? <Link to="/sign-up">Create</Link>
      </p>
    </>
  );
}

export default LoginPage;
