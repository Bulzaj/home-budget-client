import classes from "./button.module.css";
import { styles } from "../../utill/styles";

const Button = (props) => {
  let icon = null;
  if (props.icon) {
    icon = (
      <div className={classes.icon_wrapper}>
        <props.icon />
      </div>
    );
  }
  return (
    <button
      className={styles(classes, "button", props.styles)}
      onClick={props.onClick}
    >
      {icon}
      {props.children}
    </button>
  );
};

export default Button;
