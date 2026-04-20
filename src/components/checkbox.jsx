// No issues
// ID = Name
// ID should be camel case

function CheckBox({ id, label, className = "", ...props }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={id}
        className="w-4 h-4 accent-primary cursor-pointer mb-[3px]"
        {...props}
      />

      <label htmlFor={id} className="cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
