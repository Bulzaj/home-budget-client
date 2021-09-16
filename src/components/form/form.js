import React, { useState } from "react";
import FlexLayout from "../../layouts/flex-layout";
import Typography from "../../typography/typography";
import useSubcomponents from "../../hooks/use-subcomponents";
import { styleMapper } from "../../utill/style-mapper";

import { IoIosArrowDropdown, IoMdCloseCircleOutline } from "react-icons/io";

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
        {props.icon && (
          <div className="form__wrapper">
            {<props.icon className="form__icon" />}
          </div>
        )}
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

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styleMapper("dropdown", props.styles)}>
      <div className="dropdown__header">
        <FlexLayout styles={["justify-space-between"]}>
          <Typography.Title4>{props.title}</Typography.Title4>
          {!isOpen ? <IoIosArrowDropdown /> : <IoMdCloseCircleOutline />}
        </FlexLayout>
      </div>
    </div>
  );
};
Form.Dropdown = Dropdown;

const Errors = (props) => {
  let i = 0;

  let errors = null;
  if (props.errors.length) {
    errors = (
      <div className="form__error-box">
        <ul className="error__list">
          {props.errors.map((err) => {
            i++;
            return (
              <li key={i} className="error__item">
                <Typography.Paragraph styles={["color-danger"]}>
                  {err}
                </Typography.Paragraph>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return errors;
};
Form.Errors = Errors;

export default Form;
