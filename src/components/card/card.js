import classes from "./card.module.css";

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
    <div className={classes.card}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>{props.title}</h2>
        {icon}
      </div>
      <div className={classes.body}>{props.children}</div>
      {footer}
    </div>
  );
};

export default Card;
