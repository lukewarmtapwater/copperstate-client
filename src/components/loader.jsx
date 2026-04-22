function Loader({ className = "" }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`h-6 w-6 animate-spin rounded-full border-[3px] border-t-primary ${className}`}
      ></div>
    </div>
  );
}

export default Loader;
