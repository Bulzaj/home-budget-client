import { createContext, useContext, useState } from "react";
import { useAccounts } from "./use-accounts";
import { useAuth } from "./use-auth";
import { URL_API_ACCOUNT_HISTORY } from "../utill/url-consts";
import { useEffect } from "react";
import useFetch from "./use-fetch";
import { useFilters } from "./use-filter";

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
  const accessToken = useAuth().getAccessToken();
  const { selectedAccount } = useAccounts();
  const { dateFilter } = useFilters();
  const history = useFetchHistory(accessToken, selectedAccount, dateFilter);

  return {
    operationsHistory: history.operationsHistory,
    fetchHistory: history.fetchHistory,
  };
};

const useFetchHistory = (accessToken, selectedAccount, dateFilter) => {
  const fetch = useFetch(accessToken);
  const [operationsHistory, setOperationsHistory] = useState([]);

  const fetchHistory = async () => {
    if (!selectedAccount) return;

    const url = `${URL_API_ACCOUNT_HISTORY}/${selectedAccount._id}`;
    const queries = {
      from: dateFilter?.from,
      to: dateFilter?.to,
    };

    try {
      const result = await fetch(url, queries);
      setOperationsHistory(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [accessToken, selectedAccount]);

  return { operationsHistory, fetchHistory };
};
