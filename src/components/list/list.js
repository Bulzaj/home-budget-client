import classes from "./list.module.css";
import { styles } from "../../utill/styles";

const List = (props) => {
  if (props.items && Array.isArray(props.items)) {
    let i = 0;

    const items = props.items.map((item) => {
      const itemKey = item[props.itemKey] || i++;

      return (
        <li key={itemKey}>{props.wrapper ? props.wrapper(item) : item}</li>
      );
    });

    return <ul className={styles(classes, "list", props.styles)}>{items}</ul>;
  }
  throw new Error("No items provided in props object");
};

export default List;
