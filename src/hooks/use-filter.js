import { createContext, useContext, useState } from "react";

const filterContext = createContext();

export const ProvideFilters = (props) => {
  const filters = useProvideFilters();

  return (
    <filterContext.Provider value={filters}>
      {props.children}
    </filterContext.Provider>
  );
};

export const useFilters = () => useContext(filterContext);

const useProvideFilters = () => {
  const [dateFilter, setDateFilter] = useState({ from: null, to: null });

  const setFrom = (from) => {
    setDateFilter((prevState) => {
      return {
        ...prevState,
        from,
      };
    });
  };

  const setTo = (to) => {
    setDateFilter((prevState) => {
      return {
        ...prevState,
        to,
      };
    });
  };

  return {
    dateFilter,
    setFrom,
    setTo,
  };
};
