import CenterBox from "../../layouts/center-box";
import Box from "../box/box";

const Modal = (props) => {
  if (!props.show) return null;

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal__overlay">
        <CenterBox>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <Box>{props.children}</Box>
          </div>
        </CenterBox>
      </div>
    </div>
  );
};

export default Modal;
