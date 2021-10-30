import classes from "./modal.module.css";
import Card from "../card/card";
import { useModal } from "../../hooks/use-modal";
import Button from "../button/button";
import { Fragment } from "react/cjs/react.production.min";

const Modal = (props) => {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  const closeHandler = (e) => {
    e.preventDefault();
    close();
  };

  const footer = (
    <Fragment>
      <Button styles={["success"]} onClick={props.onSuccess}>
        Create
      </Button>
      <Button styles={["danger"]} onClick={closeHandler}>
        Close
      </Button>
    </Fragment>
  );

  return (
    <div className={classes.overlay}>
      <Card title={props.title} icon={props.icon} footer={footer}>
        {props.children}
      </Card>
    </div>
  );
};

export default Modal;
