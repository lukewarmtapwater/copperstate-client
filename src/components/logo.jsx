function Logo({ className = "" }) {
  return (
    <img
      src="/images/logo.png"
      className={`w-[160px] sm:w-[190px] ${className}`}
    />
  );
}

export default Logo;
