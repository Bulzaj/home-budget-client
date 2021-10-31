import { createContext, useContext, useState } from "react";

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
  const [currencies, setCurrencies] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const selectAccount = (key) => {
    const selectedAccount = accounts.find((account) => account._id === key);
    delete selectedAccount.operationsHistory;
    setSelectedAccount(selectedAccount);
  };

  return {
    accounts,
    setAccounts,
    currencies,
    setCurrencies,
    selectedAccount,
    selectAccount,
  };
};
