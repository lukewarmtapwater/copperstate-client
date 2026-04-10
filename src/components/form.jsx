import Button from "./button";

function Form({ onSubmit, children, className, ...props }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(Object.fromEntries(new FormData(e.target)));
      }}
      className="w-full mt-12"
      {...props}
    >
      {children}
      <Button className="mt-14" />
    </form>
  );
}

export default Form;
