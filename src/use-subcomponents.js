import React, { Fragment, useRef } from "react";

const useSubcomponents = (parentObj, parentProps) => {
  const parentObjRef = useRef(parentObj);

  const render = () => <Fragment>{parentProps.children}</Fragment>;

  return { render };
};

export default useSubcomponents;
