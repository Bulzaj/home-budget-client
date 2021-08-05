import { styleMapper } from "../utill/style-mapper";

const FlexLayout = (props) => {
  return (
    <div className={styleMapper("flex-layout", props.styles)}>
      {props.children}
    </div>
  );
};

export default FlexLayout;
