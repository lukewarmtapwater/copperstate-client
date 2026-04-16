import CheckBox from "../../components/checkbox";
import Form from "../../components/form";
import Input from "../../components/input";
import { Link } from "react-router";

function SignUp() {
  return (
    <>
      <h1 className="sm:mt-14 mt-20 mb-12">CREATE ACCOUNT</h1>
      <Form>
        <div className="flex flex-col gap-4">
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
            id="repeat-password"
            label="Repeat Password"
            type="password"
            placeholder="********"
          />
          <CheckBox
            id="remember"
            label="I agree to the terms and conditions."
          />
        </div>
      </Form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default SignUp;
