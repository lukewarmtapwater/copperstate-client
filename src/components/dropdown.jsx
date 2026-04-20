import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import Button from "./button";

// Button having unique className

function Dropdown({
  id,
  options,
  value,
  onChange,
  updateNavigationState = false,
  placeholder = "",
}) {
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
      <input type="hidden" id={id} name={id} value={value} />

      <Button
        type="button"
        className="py-2"
        updateNavigationState={updateNavigationState}
        onClick={() => setOpen((p) => !p)}
      >
        {value || placeholder}
        {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </Button>

      {open && (
        <div className="absolute mt-2 w-max max-h-80 overflow-y-auto border border-muted rounded-md bg-background">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="px-4 py-3 cursor-pointer hover:bg-subtle"
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
