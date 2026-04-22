import { NavLink } from "react-router";
import Button from "./button";

function NavButton({ variant, to, className = "", children }) {
  return (
    <NavLink to={to} className="hover:no-underline">
      {({ isPending }) => (
        <Button variant={variant} loading={isPending} className={className}>
          {children}
        </Button>
      )}
    </NavLink>
  );
}

export default NavButton;
