import classes from "./nav-bar.module.css";

const NavBar = (props) => {
  return <div className={classes.navbar}>{props.children}</div>;
};

export default NavBar;
