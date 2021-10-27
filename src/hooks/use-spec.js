import { createContext, useContext, useEffect, useState } from "react";
import {
  URL_API_SPEC_CASH_FLOW,
  URL_API_SPEC_EXPENDITURES,
} from "../utill/url-consts";
import { useAccounts } from "./use-accounts";
import { useAuth } from "./use-auth";
import useFetch from "./use-fetch";
import { useFilters } from "./use-filter";

const specContext = createContext();

export const ProvideSpec = (props) => {
  const spec = useProvideSpec();

  return (
    <specContext.Provider value={spec}>{props.children}</specContext.Provider>
  );
};

export const useSpec = () => useContext(specContext);

const useProvideSpec = () => {
  const accessToken = useAuth().getAccessToken();
  const { selectedAccount } = useAccounts();
  const { dateFilter } = useFilters();

  const expendituresSpec = useFetchExpenditures(
    accessToken,
    selectedAccount,
    dateFilter
  );
  const cashFlow = useFetchCashFlow(accessToken, selectedAccount, dateFilter);

  return {
    expendituresSpec: expendituresSpec.expendituresSpec,
    fetchExpendituresSpec: expendituresSpec.fetchExpenduturesSpec,
    cashFlow: cashFlow.cashFlow,
    fetchCashFlow: cashFlow.fetchCashFlow,
  };
};

const useFetchExpenditures = (accessToken, selectedAccount, dateFilter) => {
  const [expendituresSpec, setExpendituresSpec] = useState(null);
  const fetch = useFetch(accessToken);

  const fetchExpenduturesSpec = async () => {
    if (!selectedAccount) return;
    const url = `${URL_API_SPEC_EXPENDITURES}/${selectedAccount._id}`;
    const queries = {
      from: dateFilter?.from,
      to: dateFilter?.to,
    };

    const result = await fetch(url, queries);

    setExpendituresSpec(result.data);
  };

  useEffect(() => {
    fetchExpenduturesSpec();
  }, [accessToken, selectedAccount]);

  return {
    expendituresSpec,
    fetchExpenduturesSpec,
  };
};

const useFetchCashFlow = (accessToken, selectedAccount, dateFilter) => {
  const [cashFlow, setCashFlow] = useState([]);
  const fetch = useFetch(accessToken);

  const fetchCashFlow = async () => {
    if (!selectedAccount) return;

    const url = `${URL_API_SPEC_CASH_FLOW}/${selectedAccount._id}`;
    const queries = {
      from: dateFilter?.from,
      to: dateFilter?.to,
    };

    try {
      const result = await fetch(url, queries);
      setCashFlow(result.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchCashFlow();
  }, [accessToken, selectedAccount]);

  return {
    cashFlow,
    fetchCashFlow,
  };
};
