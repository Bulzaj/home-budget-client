import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.titleWrapper}>
        <h2 className={classes.title}>{props.title}</h2>
        {props.icon && <props.icon />}
      </div>
      <div className={classes.body}>{props.children}</div>
    </div>
  );
};

export default Card;
