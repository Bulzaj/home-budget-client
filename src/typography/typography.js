import React, { Fragment } from "react";
import useSubcomponents from "../use-subcomponents";
import { styleMapper } from "../utill/style-mapper";

const Typography = (props) => {
  const subcomponents = useSubcomponents(Typography);

  return (
    <Fragment className={styleMapper("typography", props.styles)}>
      {subcomponents.render()}
    </Fragment>
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

const Paragraph = (props) => (
  <p className={styleMapper("typography__paragraph", props.styles)}>
    {props.children}
  </p>
);
Typography.Paragraph = Paragraph;

export default Typography;
