import { twMerge } from "tailwind-merge";
import Loader from "../components/loader";

function Button({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const base =
    "flex items-center justify-center text-black px-4 py-3 rounded-sm transition";

  const variants = {
    primary: "bg-primary hover:bg-primary/80",
    ghost: "bg-transparent text-foreground hover:bg-muted hover:text-black",
    outline: "border border-primary text-primary hover:bg-primary/10",
    danger: "bg-danger text-background hover:bg-red-600",
  };

  return (
    <button
      className={twMerge(
        base,
        variants[variant],
        disabled || (loading && "opacity-80 cursor-not-allowed"),
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}

export default Button;
