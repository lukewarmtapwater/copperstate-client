import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import Button from "./button";

function Dropdown({
  id,
  options,
  defaultValue = "",
  updateValue = true,
  onChange = () => { },
  updateNavigationState = false,
  placeholder = "",
  trigger = null,
  className = "",
}) {
  const initialValue = defaultValue || options[0];
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: "left-0", y: "top-full mt-2" });
  const ref = useRef();
  const menuRef = useRef();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    if (open && menuRef.current && ref.current) {
      const parentRect = ref.current.getBoundingClientRect();
      const menuWidth = menuRef.current.offsetWidth;
      const menuHeight = menuRef.current.offsetHeight;

      let xClass = "left-0";
      let yClass = "top-full mt-2";

      if (parentRect.left + menuWidth > window.innerWidth) {
        xClass = "right-0";
      }
      if (parentRect.bottom + menuHeight > window.innerHeight) {
        yClass = "bottom-full mb-2";
      }

      setPosition({ x: xClass, y: yClass });
    } else {
      setPosition({ x: "left-0", y: "top-full mt-2" });
    }
  }, [open, options]);

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
            className={className}
          >
            {value || placeholder}
            {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </Button>
        </>
      )}

      {open && (
        <div
          ref={menuRef}
          className={`z-[50] absolute w-max max-h-80 overflow-y-auto border border-muted rounded-md bg-background ${position.x} ${position.y}`}
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                if (updateValue) setValue(opt);
                onChange(opt, setValue);
                setOpen(false);
              }}
              className="px-3 py-1 cursor-pointer hover:bg-subtle"
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
