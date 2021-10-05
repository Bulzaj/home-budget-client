import classes from "./side-bar.module.css";
import Button from "../button/button";
import { GiHamburgerMenu } from "react-icons/gi";

const SideBar = (props) => {
  return <div className={classes.side_bar}></div>;
};

const ToggleButton = (props) => {
  return (
    <Button
      styles={["no-border", "font-size-lg"]}
      icon={GiHamburgerMenu}
      onClick={props.onClick}
    ></Button>
  );
};
SideBar.ToggleButton = ToggleButton;

export default SideBar;
