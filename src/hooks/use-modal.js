import { createContext, useContext, useState } from "react";

const modalContext = createContext();

export const ProvideModal = (props) => {
  const modal = useProvideModal();

  return (
    <modalContext.Provider value={modal}>
      {props.children}
    </modalContext.Provider>
  );
};

export const useModal = () => useContext(modalContext);

const useProvideModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
  };
};
