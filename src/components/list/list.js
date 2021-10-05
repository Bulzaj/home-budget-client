import classes from "./list.module.css";

const List = (props) => {
  const styles = [classes.list];

  props.styles &&
    props.styles.forEach((style) => {
      styles.push(classes[`${style}`]);
    });

  if (props.items && Array.isArray(props.items)) {
    const items = props.items.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul className={styles.join(" ")}>{items}</ul>;
  }
};

export default List;
