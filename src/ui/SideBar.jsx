function SideBar({ children }) {
  return (
    <div className="row-span-2 row-start-1 p-4 bg-secondary-0">
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

export default SideBar;
