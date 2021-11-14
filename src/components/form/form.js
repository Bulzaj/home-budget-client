import { styles } from "../../utill/styles";
import classes from "./form.module.css";

const Form = (props) => {
  return (
    <form className={styles(classes, "form", props.styles)}>
      {props.children}
    </form>
  );
};

const Input = (props) => {
  let icon = null;
  if (props.icon) {
    icon = (
      <div className={classes.icon__wrapper}>
        <props.icon />
      </div>
    );
  }
  return (
    <div className={classes.input__wrapper}>
      {icon}
      <input
        className={classes.input}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};
Form.Input = Input;

const Select = (props) => {
  if (!props.data) return <h4>No data provided</h4>;

  return (
    <div className={classes.input__wrapper}>
      <input
        list={props.dataName}
        className={classes.input}
        onChange={props.onChange}
      />
      <datalist id={props.dataName}>
        {props?.data.map((item) => props.option(item))}
      </datalist>
    </div>
  );
};
Form.Select = Select;

const Option = (props) => {
  return <option key={props.key} value={props.value} />;
};
Form.Option = Option;

const Group = (props) => {
  return (
    <div className={styles(classes, "group", props.styles)}>
      {props.children}
    </div>
  );
};
Form.Group = Group;

const Date = (props) => {
  return (
    <input className={classes.date} type="date" onChange={props.onChange} />
  );
};
Form.Date = Date;

const Label = (props) => {
  return <label className={classes.label}>{props.children}</label>;
};
Form.Label = Label;

export default Form;
