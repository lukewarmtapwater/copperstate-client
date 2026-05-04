import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import Button from "./button";

function Dropdown({
  id,
  options,
  value,
  onChange,
  updateNavigationState = false,
  placeholder = "",
  trigger = null,
  align = "left",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

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
      {trigger ? (
        <div onClick={() => setOpen((p) => !p)}>{trigger}</div>
      ) : (
        <>
          <input type="hidden" id={id} name={id} value={value} />
          <Button
            type="button"
            updateNavigationState={updateNavigationState}
            onClick={() => setOpen((p) => !p)}
          >
            {value || placeholder}
            {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </Button>
        </>
      )}

      {open && (
        <div
          className={`z-[50] absolute mt-2 w-max max-h-80 overflow-y-auto border border-muted rounded-md bg-background ${align === "right" ? "right-0" : "left-0"}`}
        >
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
