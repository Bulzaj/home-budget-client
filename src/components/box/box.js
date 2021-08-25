import { styleMapper } from "../../utill/style-mapper";

const Box = (props) => {
  return (
    <div className={styleMapper("box", props.styles)}>{props.children}</div>
  );
};

export default Box;
