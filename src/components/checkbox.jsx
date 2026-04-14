function CheckBox({ id, label, checked, onChange, className = "", ...props }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-accent cursor-pointer"
        {...props}
      />

      <label htmlFor={id} className="cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}

export default CheckBox;
