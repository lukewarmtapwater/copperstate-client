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
    "flex items-center justify-center px-4 py-3 rounded-sm transition";

  const variants = {
    primary: "bg-accent hover:bg-opacity-80",
    ghost: "bg-transparent text-gray-500 hover:bg-gray-200 hover:text-black",
    outline: "border border-accent text-accent hover:bg-accent/10",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${
        disabled || loading ? "opacity-80 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}

export default Button;
