import classes from "./form.module.css";

const Form = (props) => {
  return <form className={classes.form}>{props.children}</form>;
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

export default Form;
