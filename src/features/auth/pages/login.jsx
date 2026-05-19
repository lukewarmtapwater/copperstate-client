import Input from "../../../components/input";
import { Link } from "react-router";
import AuthForm from "../components/AuthForm";

function Login() {
  return (
    <AuthForm
      title="Manage your Account"
      btnText="Login"
      link={
        <>
          Don't have an account? <Link to="/sign-up">Create one.</Link>
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
      <p>
        Forgot your password? <Link>Click here.</Link>
      </p>
    </AuthForm>
  );
}

export default Login;
