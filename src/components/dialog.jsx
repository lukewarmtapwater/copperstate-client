import { useEffect } from "react";
import { RiCloseLine } from "@remixicon/react";
import Button from "./button";

function Dialog({ open, onClose, className = "", title, children, size = "md" }) {
  const sizes = {
    sm: "sm:max-w-[320px]",
    md: "sm:max-w-[420px]",
    lg: "sm:max-w-[640px]",
    xl: "sm:max-w-[800px]",
  };

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
    <div className="fixed inset-0 z-[300] flex items-center justify-center">
      <div
        className="absolute w-screen h-screen z-[300] bg-foreground/40"
        onClick={onClose}
      />

      <div className={`relative z-[300] max-w-[95%] ${sizes[size]} w-full p-6 bg-white rounded-md border border-muted flex flex-col gap-4 max-h-[90vh] overflow-y-auto`}>
        <div className="flex items-center justify-between">
          <h3>{title}</h3>
          <Button
            variant="ghost"
            type="button"
            onClick={onClose}

          >
            <RiCloseLine />
          </Button>
        </div>

        <div className={className}>{children}</div>
      </div>
    </div>
  );
}


export default Dialog;
