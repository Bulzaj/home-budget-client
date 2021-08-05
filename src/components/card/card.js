import React from "react";
import Typography from "../../typography/typography";
import { styleMapper } from "../../utill/style-mapper";

const Card = (props) => {
  return (
    <div className={styleMapper("card", props.styles)}>
      {React.Children.map(props.children, (child) => child)}
    </div>
  );
};

const Title = (props) => (
  <div className={styleMapper("card__title", props.styles)}>
    <Typography.Title2>{props.children}</Typography.Title2>
  </div>
);
Card.Title = Title;

const Body = (props) => (
  <div className={styleMapper("card__body", props.styles)}>
    <Typography.Paragraph styles={["color-black", "thin"]}>
      {props.children}
    </Typography.Paragraph>
  </div>
);
Card.Body = Body;

export default Card;
