import { twMerge } from "tailwind-merge";

function Input({
  id,
  label,
  placeholder,
  required = true,
  className,
  ...props
}) {
  return (
    <div className="flex flex-col gap-2 text-foreground">
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}

      <input
        id={id}
        name={id}
        className={twMerge(
          "px-3 py-4 w-full rounded-sm border border-primary bg-transparent placeholder:text-muted focus:outline-none focus:border-2",
          className,
        )}
        placeholder={placeholder || label}
        {...props}
      />
    </div>
  );
}

export default Input;
