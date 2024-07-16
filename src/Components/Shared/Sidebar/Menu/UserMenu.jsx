import {
  BsBoxArrowLeft,
  BsBoxArrowRight,
  BsCashCoin,
  BsCashStack,
} from "react-icons/bs";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        address="/send-money"
        label="Send&nbsp;Money"
        icon={BsCashCoin}
      />
      <MenuItem
        address="/cash-in"
        label="Cash&nbsp;In"
        icon={BsBoxArrowLeft}
      />
      <MenuItem
        address="/cash-out"
        label="Cash&nbsp;Out"
        icon={BsBoxArrowRight}
      />
      <MenuItem
        address="/my-transactions"
        label="My&nbsp;Transactions"
        icon={BsCashStack}
      />
    </>
  );
};

export default UserMenu;
