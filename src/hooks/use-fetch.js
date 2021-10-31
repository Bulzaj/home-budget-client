import axios from "axios";
import { useState } from "react";

const useFetch = (accessToken, method) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const config = {
    headers: {
      contentType: "application/json",
      authorization: `bearer ${accessToken}`,
    },
  };

  const fetch = async (url, queries, body) => {
    if (isFetching) return;

    setIsLoading(true);
    try {
      const newUrl = generateUrl(url, queries);

      let result = null;

      setIsFetching(true);

      if (method === "POST") result = await axios.post(newUrl, body, config);
      result = await axios.get(newUrl, config);

      setIsLoading(false);
      setIsFetching(false);
      return result.data;
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  };

  return { fetch, isLoading };
};

const generateUrl = (url, queries = null) => {
  if (!queries) return url;

  let newUrl = url + "?";

  for (const [key, value] of Object.entries(queries)) {
    if (key && value) {
      newUrl += `${key}=${value}&`;
    }
  }

  return newUrl;
};

export default useFetch;
