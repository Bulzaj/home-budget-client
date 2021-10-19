import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.titleWraper}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes.body}>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
