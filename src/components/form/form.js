import classes from "./form.module.css";

const Form = (props) => {
  return <form>{props.children}</form>;
};

const Input = (props) => {
  return (
    <div className={classes.input__wrapper}>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};
Form.Input = Input;

export default Form;
