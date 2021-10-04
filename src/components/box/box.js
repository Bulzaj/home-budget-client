import classes from "./box.module.css";

const Box = (props) => {
  const styles = [classes.box];
  props.styles &&
    props.styles.forEach((style) => {
      styles.push(classes[`${style}`]);
    });

  return <div className={styles.join(" ")}>{props.children}</div>;
};

const Divider = (props) => {
  return <span className={classes.divider} />;
};
Box.Divider = Divider;

export default Box;
