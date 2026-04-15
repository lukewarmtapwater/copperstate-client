import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "@remixicon/react";
import Button from "./button";

function Dropdown({ options = [], value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <Button onClick={() => setOpen(!open)}>
        {value || placeholder}
        <RiArrowDownSLine />
      </Button>

      {open && (
        <div className="absolute z-50 mt-2 border border-primary/40 rounded-md bg-background">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full px-4 py-3 cursor-pointer hover:bg-subtle"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
