import React, { Fragment } from "react";
import { styleMapper } from "../utill/style-mapper";

const Typography = (props) => {
  const subcomponentList = Object.keys(Typography);

  const subcomponents = subcomponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <Fragment>{subcomponents.map((subcomponent) => subcomponent)}</Fragment>
  );
};

const Title = (props) => (
  <h1 className={styleMapper("typography__title", props.styles)}>
    {props.children}
  </h1>
);
Typography.Title = Title;

const Title2 = (props) => (
  <h2 className={styleMapper("typography__title-2")}>{props.children}</h2>
);
Typography.Title2 = Title2;

const Paragraph = (props) => (
  <p className={styleMapper("typography__paragraph", props.styles)}>
    {props.children}
  </p>
);
Typography.Paragraph = Paragraph;

export default Typography;
