import classes from "./button.module.css";

const Button = (props) => {
  const styles = [classes.button];

  props.styles &&
    props.styles.forEach((style) => {
      styles.push(classes[`${style}`]);
    });

  let icon = null;
  if (props.icon) {
    icon = (
      <div className={classes.icon_wrapper}>
        <props.icon />
      </div>
    );
  }
  return (
    <button className={styles.join(" ")} onClick={props.onClick}>
      {icon}
      {props.children}
    </button>
  );
};

export default Button;
