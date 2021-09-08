import React, { useState } from "react";
import FlexLayout from "../../layouts/flex-layout";
import Typography from "../../typography/typography";
import useSubcomponents from "../../hooks/use-subcomponents";
import { styleMapper } from "../../utill/style-mapper";

const Form = (props) => {
  const subcomponents = useSubcomponents(Form, props);

  return (
    <form className={styleMapper("form", props.styles)}>
      {subcomponents.render()}
    </form>
  );
};

const Title = (props) => (
  <Typography.Title2 styles={["bold", "justify-center"]}>
    {props.children}
  </Typography.Title2>
);
Form.Title = Title;

const Group = (props) => (
  <div className={styleMapper("form__group")}>{props.children}</div>
);
Form.Group = Group;

const Label = (props) => (
  <div className={styleMapper("label", props.styles)}>
    <Typography.Label>{props.children}</Typography.Label>
  </div>
);
Form.Label = Label;

const Input = (props) => {
  return (
    <div className={styleMapper("form__box")}>
      <FlexLayout styles={["row", "align-center"]}>
        <div className="form__wrapper">
          {<props.icon className="form__icon" />}
        </div>
        <input
          onChange={props.onChange}
          className="form__input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </FlexLayout>
    </div>
  );
};
Form.Input = Input;

export default Form;
