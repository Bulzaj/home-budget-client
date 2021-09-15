import React from "react";
import useSubcomponents from "../hooks/use-subcomponents";
import { styleMapper } from "../utill/style-mapper";

const Typography = (props) => {
  const subcomponents = useSubcomponents(Typography);

  return (
    <div className={styleMapper("typography__wrapper", props.styles)}>
      {subcomponents.render()}
    </div>
  );
};

const Title = (props) => (
  <h1 className={styleMapper("typography__title", props.styles)}>
    {props.children}
  </h1>
);
Typography.Title = Title;

const Title2 = (props) => (
  <h2 className={styleMapper("typography__title-2", props.styles)}>
    {props.children}
  </h2>
);
Typography.Title2 = Title2;

const Title3 = (props) => (
  <h3 className={styleMapper("typography__title-3", props.styles)}>
    {props.children}
  </h3>
);
Typography.Title3 = Title3;

const Title4 = (props) => (
  <h4 className={styleMapper("typography__title-4", props.styles)}>
    {props.children}
  </h4>
);
Typography.Title4 = Title4;

const Title5 = (props) => (
  <h5 className={styleMapper("typography__title-5", props.styles)}>
    {props.children}
  </h5>
);
Typography.Title5 = Title5;

const Paragraph = (props) => (
  <p
    className={styleMapper("typography__paragraph", props.styles)}
    onClick={props.onClick}
  >
    {props.children}
  </p>
);
Typography.Paragraph = Paragraph;

const Label = (props) => (
  <label className={styleMapper("typography__label", props.styles)}>
    {props.children}
  </label>
);
Typography.Label = Label;

export default Typography;
