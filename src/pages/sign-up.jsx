import CheckBox from "../components/checkbox";
import Form from "../components/form";
import Input from "../components/input";

function SignUpPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center border border-less-less-light max-w-[400px] m-10 rounded-sm px-8 py-12">
        <img src="/images/logo.png" className="w-[210px]" />
        <h1 className="mt-16">CREATE ACCOUNT</h1>
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
        </Form>
        <span className="mt-3">
          Already have an account? <a href="/login">Create one</a>
        </span>
      </div>
    </div>
  );
}

export default SignUpPage;
