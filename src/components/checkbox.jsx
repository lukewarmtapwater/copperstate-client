function CheckBox({ id, label, ...props }) {
  return (
    <div className="flex items-start gap-2 text-less-light">
      <input
        type="checkbox"
        id={id}
        name={id}
        className="mt-[2.5px] w-4 h-4 accent-accent"
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default CheckBox;
