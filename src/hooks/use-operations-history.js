import { createContext, useContext, useState } from "react";
import { useAccounts } from "./use-accounts";
import { useAuth } from "./use-auth";
import { URL_API_ACCOUNT_HISTORY } from "../utill/url-consts";
import axios from "axios";
import { useEffect } from "react";

const historyContext = createContext();

export const ProvideOperationsHistory = (props) => {
  const history = useProvideHistory();

  return (
    <historyContext.Provider value={history}>
      {props.children}
    </historyContext.Provider>
  );
};

export const useOperationsHistory = () => useContext(historyContext);

const useProvideHistory = () => {
  const [operationsHistory, setOperationsHistory] = useState([]);
  const [dateFilter, setDateFIlter] = useState({ from: null, to: null });
  const accessToken = useAuth().getAccessToken();
  const { selectedAccount } = useAccounts();

  const fetch = async () => {
    const config = {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
    };

    try {
      if (accessToken && selectedAccount) {
        let url = `${URL_API_ACCOUNT_HISTORY}/${selectedAccount._id}?`;

        if (dateFilter.from) url += `from=${dateFilter.from}&`;
        if (dateFilter.to) url += `to=${dateFilter.to}&`;

        const result = await axios.get(url, config);
        setOperationsHistory(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, [accessToken, selectedAccount]);

  const setFrom = (from) => {
    setDateFIlter((prevState) => {
      return {
        ...prevState,
        from,
      };
    });
  };

  const setTo = (to) => {
    setDateFIlter((prevState) => {
      return {
        ...prevState,
        to,
      };
    });
  };

  return {
    operationsHistory,
    dateFilter,
    fetch,
    setFrom,
    setTo,
  };
};
