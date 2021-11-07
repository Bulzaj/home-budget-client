import { createContext, useContext, useState } from "react";

const specContext = createContext();

export const ProvideSpec = (props) => {
  const spec = useProvideSpec();

  return (
    <specContext.Provider value={spec}>{props.children}</specContext.Provider>
  );
};

export const useSpec = () => useContext(specContext);

const useProvideSpec = () => {
  const [operationsHistory, setOperationsHistory] = useState([]);
  const [expendituresSpec, setExpendituresSpec] = useState(null);
  const [cashFlow, setCashFlow] = useState(null);

  return {
    operationsHistory,
    setOperationsHistory,
    expendituresSpec,
    setExpendituresSpec,
    cashFlow,
    setCashFlow,
  };
};
