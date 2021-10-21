import { useState, useEffect } from "react";
import axios from "axios";
import { URL_API_ACCOUNT_HISTORY } from "../utill/url-consts";

const useFetchHistory = (accessToken, selectedAccount) => {
  const [operationsHistory, setOperationsHistory] = useState([]);
  const [filterData, setFilterData] = useState({});

  const fetch = async () => {
    const config = {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
    };

    try {
      // http://localhost:8080/api/history/:accuntId?from=123qweasd

      if (accessToken && selectedAccount) {
        let url = `${URL_API_ACCOUNT_HISTORY}/${selectedAccount._id}?`;

        if (filterData.from) url += `from=${filterData.from}&`;
        if (filterData.to) url += `to=${filterData.to}&`;

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

  return {
    operationsHistory,
    fetch,
    setFilterData,
  };
};

export default useFetchHistory;
