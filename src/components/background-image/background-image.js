import { styleMapper } from "../../utill/style-mapper";

const BackgroundImage = (props) => {
  const backgroundImage = props.img && { backgroundImage: `url(${props.img})` };

  return (
    <div
      className={styleMapper("background-image", props.styles)}
      style={backgroundImage}
    ></div>
  );
};

export default BackgroundImage;
