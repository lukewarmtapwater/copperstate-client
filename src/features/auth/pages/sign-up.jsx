import Input from "../../../components/input";
import { Link } from "react-router";
import AuthForm from "../components/AuthForm";

function SignUp() {
  return (
    <AuthForm
      title="Create an account"
      btnContent="Sign up"
      link={
        <>
          Already have an account? <Link to="/login">Login</Link>
        </>
      }
    >
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
      <p>
        By creating an account, you agree to our{" "}
        <Link>Terms and Policies.</Link>
      </p>
    </AuthForm>
  );
}

export default SignUp;
