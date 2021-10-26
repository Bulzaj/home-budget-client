import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./use-auth";
import { useHistory } from "react-router";
import { URL_API_ACCOUNT } from "../utill/url-consts";
import useFetch from "./use-fetch";

const accountsContext = createContext();

export const ProvideAccounts = (props) => {
  const accounts = useProvideContext();

  return (
    <accountsContext.Provider value={accounts}>
      {props.children}
    </accountsContext.Provider>
  );
};

export const useAccounts = () => useContext(accountsContext);

const useProvideContext = () => {
  const [accounts, setAccounts] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const accessToken = useAuth().getAccessToken();
  const redirect = useHistory().push;
  const fetch = useFetch(accessToken);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const result = await fetch(URL_API_ACCOUNT);
        setAccounts(result.data);
      } catch (err) {
        redirect("/");
      }
    };
    fetchAccounts();
  }, [accessToken, redirect]);

  const selectAccount = (key) => {
    const selectedAccount = accounts.find((account) => account._id === key);
    delete selectedAccount.operationsHistory;
    setSelectedAccount(selectedAccount);
  };

  return {
    accounts,
    selectedAccount,
    selectAccount,
  };
};
