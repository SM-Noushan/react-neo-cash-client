import { toggleSidebar } from "../../../Features/ComponentStates/componentStatesSlice";
import { BsArrowLeftShort, BsBox, BsPower } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/neoCash.png";
import { Link } from "react-router-dom";
import UserMenu from "./Menu/UserMenu";
import MenuItem from "./Menu/MenuItem";

const Sidebar = () => {
  const minimized = useSelector(
    (state) => state.componentStates.sidebar.minimized
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`bg-fuchsia-800 p-5 pt-8 relative text-gray-50 duration-300 z-50 ${
        minimized ? "w-20" : "w-72"
      }`}
    >
      <div
        onClick={() => dispatch(toggleSidebar())}
        className={`${
          !minimized ? "bg-gray-950/30" : "hidden"
        } inset-0 fixed lg:hidden -z-50`}
      />
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="absolute bg-white text-fuchsia-800 text-3xl rounded-full top-9 -right-3 border border-fuchsia-800 hover:brightness-90"
          >
            <BsArrowLeftShort className={`${minimized && "-rotate-180"}`} />
          </button>
          <Link to="/" className="inline-flex items-center gap-x-4 mt-1">
            <img
              src={logo}
              alt="website-logo"
              className={`size-9 object-contain duration-500 ${
                minimized && "rotate-[360deg]"
              }`}
            />
            <h1 className={`text-2xl duration-300 ${minimized && "scale-0"}`}>
              NeoCash
            </h1>
          </Link>
          <menu className="mt-6 space-y-4 flex-col justify-between">
            <MenuItem address="/dashboard" label="Overview" icon={BsBox} />
            <UserMenu />
          </menu>
        </div>
        <div className="border-t pt-4">
          <button className="inline-flex gap-x-4 p-2 w-full rounded-md hover:bg-fuchsia-900 font-medium relative group">
            <span>
              <BsPower size={21} />
            </span>
            <span className={`duration-300 ${minimized && "scale-0"}`}>
              Sign&nbsp;Out
            </span>
            {minimized && (
              <span className="absolute z-50 left-full bottom-1 rounded-md px-2.5 py-1.5 ml-10 bg-fuchsia-100 text-fuchsia-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                Sign&nbsp;Out
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
