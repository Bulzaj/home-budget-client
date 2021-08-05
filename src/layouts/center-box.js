import { styleMapper } from "../utill/style-mapper";

const CenterBox = (props) => {
  return (
    <div className={styleMapper("center-box", props.styles)}>
      {props.children}
    </div>
  );
};

export default CenterBox;
