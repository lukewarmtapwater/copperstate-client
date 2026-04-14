function DashboardSection({ children, className, ...props }) {
  return (
    <div
      className={"bg-gray-100 rounded-md px-8 py-8 m-3.5 ml-0 " + className}
      {...props}
    >
      {children}
    </div>
  );
}

export default DashboardSection;
