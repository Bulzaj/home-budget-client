import classes from "./list.module.css";
import { styles } from "../../utill/styles";

const List = (props) => {
  if (props.items && Array.isArray(props.items)) {
    const items = props.items.map((item) => {
      return <li key={item}>{item}</li>;
    });
    return <ul className={styles(classes, "list", props.styles)}>{items}</ul>;
  }
};

export default List;
