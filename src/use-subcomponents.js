import React, { Fragment } from "react";

const useSubcomponents = (parentObj, parentProps) => {
  const render = () => <Fragment>{parentProps.children}</Fragment>;

  return { render };
};

export default useSubcomponents;
