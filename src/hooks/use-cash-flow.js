import { createContext, useContext, useEffect, useState } from "react";
import { URL_API_ACCOUNT_CASH_FLOW } from "../utill/url-consts";
import { useAccounts } from "./use-accounts";
import { useAuth } from "./use-auth";
import useFetch from "./use-fetch";

const cashFlowContext = createContext();

export const ProvideCashFlow = (props) => {
  const cashFlow = useProvideCashFlow();

  return (
    <cashFlowContext.Provider value={cashFlow}>
      {props.children}
    </cashFlowContext.Provider>
  );
};

export const useCashFlow = () => useContext(cashFlowContext);

const useProvideCashFlow = () => {
  const accessToken = useAuth().getAccessToken();
  const { selectedAccount } = useAccounts();
  const expendituresSpec = useFetchExpendituresSpec(
    accessToken,
    selectedAccount
  );

  return {
    expendituresSpec,
  };
};

const useFetchExpendituresSpec = (accessToken, selectedAccount) => {
  const [expendituresSpec, setExpendituresSpec] = useState(null);
  const fetch = useFetch(accessToken);

  const fetchExpenduturesSpec = async () => {
    if (!selectedAccount) return;
    const url = `${URL_API_ACCOUNT_CASH_FLOW}/expenditures/${selectedAccount._id}`;
    const queries = {};
    const result = await fetch(url, queries);
    console.log(result.data);
    setExpendituresSpec(result.data);
  };

  useEffect(() => {
    fetchExpenduturesSpec();
  }, [selectedAccount, accessToken]);

  return {
    expendituresSpec,
    fetchExpenduturesSpec,
  };
};
