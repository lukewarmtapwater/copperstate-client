import { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "@remixicon/react";

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
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex justify-between gap-1 items-center py-2"
      >
        {value || placeholder}
        <RiArrowDownSLine />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full border border-less-less-light rounded-md bg-white">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full px-3 py-2 cursor-pointer hover:bg-gray-100"
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
