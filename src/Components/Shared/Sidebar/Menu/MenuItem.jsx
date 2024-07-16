import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MenuItem = ({ address, label, icon: Icon }) => {
  const minimized = useSelector(
    (state) => state.componentStates.sidebar.minimized
  ); //sidebar minimized state

  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        `flex gap-x-4 p-2 rounded-md hover:bg-fuchsia-900 font-medium relative group ${
          isActive && "bg-fuchsia-700"
        }`
      }
    >
      <span>
        <Icon size={21} />
      </span>
      <span className={`duration-300 ${minimized && "scale-0"}`}>{label}</span>
      {minimized && (
        <span className="absolute z-50 left-full bottom-1 rounded-md px-2.5 py-1.5 ml-10 bg-fuchsia-100 text-fuchsia-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {label}
        </span>
      )}
    </NavLink>
  );
};

MenuItem.propTypes = {
  address: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default MenuItem;
