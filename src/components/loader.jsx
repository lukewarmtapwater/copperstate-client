function Loader({ className }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`h-7 w-7 animate-spin rounded-full border-[3px] border-t-primary ${className}`}
      ></div>
    </div>
  );
}

export default Loader;
