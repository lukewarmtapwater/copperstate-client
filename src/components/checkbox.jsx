function CheckBox({ id, label }) {
  return (
    <div className="flex items-start gap-2.5">
      <input
        type="checkbox"
        id={id}
        name={id}
        className="mt-[2.1px] w-4 h-4 accent-accent"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default CheckBox;
