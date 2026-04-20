import { useActionData } from "react-router";
import { twMerge } from "tailwind-merge";

// No issues

function Input({
  id,
  label,
  placeholder = "",
  required = true,
  className = "",
  ...props
}) {
  const data = useActionData();
  const error = data?.fieldErrors?.[id]?.[0];

  return (
    <div className="w-full flex flex-col gap-2 text-foreground">
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
          "px-3 py-3 w-full rounded-sm border border-primary bg-white placeholder:text-foreground/60 focus:outline-none focus:border-2",
          error && "border-danger",
          className,
        )}
        placeholder={placeholder || label}
        {...props}
      />
      {error && <p className="text-danger text-sm">{error}</p>}
    </div>
  );
}

export default Input;
