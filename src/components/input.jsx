import { useActionData } from "react-router";
import { twMerge } from "tailwind-merge";

function Input({
  id,
  label,
  placeholder = "",
  required = true,
  className = "",
  icon = null,
  ...props
}) {
  const data = useActionData();
  const error = data?.fieldErrors?.[id]?.[0];

  return (
    <div className="w-full flex flex-col gap-1 text-foreground">
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={id}
          className={twMerge(
            "px-3 py-3 w-full rounded-md border border-primary bg-white placeholder:text-foreground/60 focus:outline-none focus:border-2",
            icon && "pl-9",
            error && "border-danger",
            className,
          )}
          placeholder={placeholder || label}
          {...props}
        />
      </div>

      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}

export default Input;
