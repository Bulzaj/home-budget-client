import classes from "./card.module.css";

const Card = (props) => {
  let icon = null;
  if (props.icon) {
    icon = <span className={classes.icon}>{props.icon && <props.icon />}</span>;
  }

  return (
    <div className={classes.card}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>{props.title}</h2>
        {icon}
      </div>
      <div className={classes.body}>{props.children}</div>
    </div>
  );
};

export default Card;
