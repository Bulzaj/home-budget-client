import { createContext, useContext, useState } from "react";

const collapseSideBarContext = createContext();

export const ProvideCollapseSideBar = (props) => {
  const collapseSideBarValues = useProvideCollapseSideBar();

  return (
    <collapseSideBarContext.Provider value={collapseSideBarValues}>
      {props.children}
    </collapseSideBarContext.Provider>
  );
};

export const useCollapseSidebar = () => useContext(collapseSideBarContext);

const useProvideCollapseSideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisible = () => {
    setIsVisible(true);
  };

  const setNotVisible = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    setVisible,
    setNotVisible,
  };
};
