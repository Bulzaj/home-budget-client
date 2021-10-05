import classes from "./box.module.css";
import { styles } from "../../utill/styles";

const Box = (props) => {
  return (
    <div className={styles(classes, "box", props.styles)}>{props.children}</div>
  );
};

const Divider = (props) => {
  return <span className={classes.divider} />;
};
Box.Divider = Divider;

export default Box;
