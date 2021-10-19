import List from "../../components/list/list";
import dateFormat from "dateformat";
import classes from "./history-list.module.css";
import { styles } from "../../utill/styles";

const OPERATION_TYPES = ["INCOME", "EXPENDITURE"];

const dateMask = "dd.mm.yy HH:MM";

const HistoryList = (props) => {
  const wrapper = (item) => {
    const style = [];

    if (item.type === OPERATION_TYPES[0]) style.push("success");
    if (item.type === OPERATION_TYPES[1]) style.push("danger");

    return (
      <List.Item styles={["undersocre"]}>
        <h3>{item.description}</h3>
        <div>
          <h3 className={styles(classes, "amount", style)}>{item.ammount}</h3>
          <h4 className={classes.date}>
            {dateFormat(item.createdAt, dateMask)}
          </h4>
        </div>
      </List.Item>
    );
  };

  return <List items={props.items} wrapper={wrapper} />;
};

export default HistoryList;
