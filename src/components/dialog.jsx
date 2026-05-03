import { useEffect } from "react";
import { RiCloseLine } from "@remixicon/react";
import Button from "./button";

function Dialog({ open, onClose, className = "", title, children }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return;

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center">
      <div
        className="absolute w-screen h-screen z-[250] bg-black/30"
        onClick={onClose}
      />

      <div className="relative z-[300] w-full max-w-md mx-4 bg-white rounded-md border border-muted flex flex-col">
        <div className="flex items-center justify-between px-4 py-7">
          <h3 className="text-black">{title}</h3>
          <Button
            variant="ghost"
            type="button"
            onClick={onClose}
            className="p-1"
          >
            <RiCloseLine className="w-5 h-5" />
          </Button>
        </div>

        <div className={`px-5 py-5 ${className}`}>{children}</div>
      </div>
    </div>
  );
}

export default Dialog;
