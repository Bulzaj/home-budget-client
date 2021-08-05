import { styleMapper } from "../utill/style-mapper";

const GridLayout = (props) => {
  return (
    <div className={styleMapper("grid-layout", props.styles)}>
      {props.children}
    </div>
  );
};

export default GridLayout;
