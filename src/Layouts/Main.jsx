import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="font-roboto h-dvh flex text-gray-950">
      <Sidebar />
      <div className="fixed lg:static w-full h-dvh pl-[80px] lg:pl-0 flex-1 bg-gray-200">
        <div className="h-16 border-y border-fuchsia-400 w-full flex items-center justify-end gap-2 sm:gap-4 pr-4 sm:pr-12 sm:text-xl">
          <span className="rounded-full w-fit bg-fuchsia-700 px-4 py-2 text-white font-medium">
            S
          </span>
          <h1>Sharidom</h1>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
