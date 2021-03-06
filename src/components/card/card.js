import classes from "./card.module.css";
import { styles } from "../../utill/styles";

const Card = (props) => {
  let icon = null;
  if (props.icon) {
    icon = <span className={classes.icon}>{props.icon && <props.icon />}</span>;
  }

  let footer = null;
  if (props.footer) {
    footer = <div className={classes.footerWrapper}>{props.footer}</div>;
  }

  return (
    <div className={styles(classes, "card", props.styles)}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>{props.title}</h2>
        {icon}
      </div>
      <div className={classes.body}>{props.children}</div>
      {footer}
    </div>
  );
};

const Message = (props) => (
  <div className={classes.messageWrapper}>
    <props.messageIcon />
    <h2 className={classes.message}>{props.children}</h2>
  </div>
);
Card.Message = Message;

export default Card;
