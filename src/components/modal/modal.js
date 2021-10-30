import classes from "./modal.module.css";
import Card from "../card/card";
import { useModal } from "../../hooks/use-modal";
import Button from "../button/button";

const Modal = (props) => {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  const closeHandler = (e) => {
    e.preventDefault();
    close();
  };

  return (
    <div className={classes.overlay}>
      <Card
        title={props.title}
        icon={props.icon}
        footer={<Button onClick={closeHandler}>Close</Button>}
      >
        {props.children}
      </Card>
    </div>
  );
};

export default Modal;
