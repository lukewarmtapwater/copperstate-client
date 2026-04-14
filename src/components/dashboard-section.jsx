function DashboardSection({ children, className, ...props }) {
  return (
    <div
      className={"bg-[#F5F5F6] rounded-md px-8 py-8 m-3.5 " + className}
      {...props}
    >
      {children}
    </div>
  );
}

export default DashboardSection;
