function Input({
  id,
  label,
  placeholder,
  required = true,
  className,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2 text-less-light mb-4">
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <input
        id={id}
        name={id}
        className={
          "px-3 py-3.5 w-full rounded-sm border border-accent bg-transparent placeholder:text-less-less-light focus:outline-none focus:border-2 " +
          className
        }
        placeholder={placeholder || label}
        {...props}
      />
    </div>
  );
}

export default Input;
