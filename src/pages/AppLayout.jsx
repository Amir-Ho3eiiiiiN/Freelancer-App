import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

function AppLayout({children}) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {children}
      <div className="p-8 overflow-auto bg-secondary-100">
        <div className="flex flex-col max-w-screen-lg gap-10 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
