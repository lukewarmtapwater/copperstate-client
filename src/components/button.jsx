function Button({ className, ...props }) {
  return (
    <button
      className={
        "w-full bg-accent py-4 rounded-sm hover:bg-opacity-80 " + className
      }
      type="submit"
      {...props}
    >
      Submit →
    </button>
  );
}

export default Button;
