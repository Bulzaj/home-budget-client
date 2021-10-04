import classes from "./box.module.css";

const Box = (props) => {
  return <div className={classes.box}>{props.children}</div>;
};

export default Box;
