import FlexLayout from "../../layouts/flex-layout";
import { styleMapper } from "../../utill/style-mapper";

const Image = (props) => {
  return (
    <div className={styleMapper("image", props.styles)}>
      <FlexLayout styles={["justify-center"]}>
        <img className="image__img" src={props.src} alt={props.alt} />
      </FlexLayout>
    </div>
  );
};
export default Image;
