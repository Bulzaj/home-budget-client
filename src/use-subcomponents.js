import React, { useRef } from "react";

const useSubcomponents = (parentObj, parentProps) => {
  const parentObjRef = useRef(parentObj);

  const subcomponentList = Object.keys(parentObjRef.current);

  const subcomponents = subcomponentList.map((key) => {
    return React.Children.map(parentProps.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  const render = () => subcomponents.map((subcomponent) => subcomponent);

  return { render };
};

export default useSubcomponents;
