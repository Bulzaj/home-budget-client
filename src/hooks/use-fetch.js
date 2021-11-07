import axios from "axios";
import { useState } from "react";

const useFetch = (accessToken, method) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetch = async (config) => {
    if (isFetching) return;

    setIsLoading(true);
    setError(null);
    try {
      const newUrl = generateUrl(config.url, config.queries);

      let result = null;

      setIsFetching(true);

      result = await axios({
        method: config.method || "GET",
        url: newUrl,
        data: config.body || {},
        headers: {
          contentType: "application/json",
          authorization: `bearer ${accessToken}`,
        },
      });

      setIsLoading(false);
      setIsFetching(false);
      return result.data;
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return { fetch, isLoading, error };
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
