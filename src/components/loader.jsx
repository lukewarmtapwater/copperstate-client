function Loader({ className }) {
  return (
    <div
      className={
        "flex items-center justify-center h-6 w-6 animate-spin rounded-full border-[3px] border-grey-100 border-t-accent " +
        className
      }
    ></div>
  );
}

export default Loader;
