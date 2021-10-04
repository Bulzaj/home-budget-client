import classes from "./image.module.css";

const Image = (props) => {
  return <img className={classes.image} src={props.src} alt={props.alt} />;
};

export default Image;
