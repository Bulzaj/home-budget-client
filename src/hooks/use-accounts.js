import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./use-auth";
import { useHistory } from "react-router";
import axios from "axios";
import { URL_API_ACCOUNT } from "../utill/url-consts";

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

  useEffect(() => {
    const config = {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
    };
    const fetchAccounts = async () => {
      try {
        const accounts = await axios.get(URL_API_ACCOUNT, config);
        setAccounts(accounts.data);
      } catch (err) {
        redirect("/");
      }
    };
    fetchAccounts();
  }, [accessToken, redirect]);

  const selectAccout = (key) => {
    const selectedAccount = accounts.find((account) => account._id === key);
    delete selectedAccount.operationsHistory;
    setSelectedAccount(selectedAccount);
  };

  return {
    accounts,
    selectedAccount,
    selectAccout,
  };
};
