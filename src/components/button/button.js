import { styleMapper } from "../../utill/style-mapper";

const Button = (props) => {
  return (
    <button
      className={styleMapper("button", props.styles)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
