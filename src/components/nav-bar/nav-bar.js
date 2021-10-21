import classes from "./nav-bar.module.css";

const NavBar = (props) => {
  return <div className={classes.navbar}>{props.children}</div>;
};

const Item = (props) => {
  return <div className={classes.item}>{props.children}</div>;
};
NavBar.Item = Item;

export default NavBar;
