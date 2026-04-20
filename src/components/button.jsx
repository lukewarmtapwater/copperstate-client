import { twMerge } from "tailwind-merge";
import Loader from "../components/loader";
import { useNavigation } from "react-router";

// no issues

function Button({
  children,
  variant = "primary",
  loading = false,
  updateNavigationState = false,
  className = "",
  ...props
}) {
  const navigation = useNavigation();

  const isLoading =
    loading ||
    (updateNavigationState &&
      (navigation.state === "submitting" || navigation.state === "loading"));

  const base =
    "w-max h-max flex items-center justify-center gap-1 text-black px-3 py-3 rounded-sm";
  const variants = {
    primary: "bg-primary hover:bg-primary/80",
    ghost: "bg-transparent text-foreground hover:bg-muted hover:text-black",
    outline: "border border-primary text-primary hover:bg-primary/10",
    danger: "bg-danger hover:bg-red-600",
  };

  return (
    <button
      className={twMerge(
        base,
        variants[variant],
        isLoading && "opacity-80 cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
}

export default Button;
