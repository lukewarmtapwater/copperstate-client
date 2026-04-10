function Input({ id, label, placeholder, ...props }) {
  return (
    <div className="flex flex-col gap-2 text-less-light mb-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        className="px-3 py-4 rounded-sm border-[1px] border-accent bg-transparent placeholder:text-less-less-light focus:outline-none focus:border-2"
        placeholder={placeholder || label}
        {...props}
      />
    </div>
  );
}

export default Input;
