import axios from "axios";

const useFetch = (accessToken) => {
  const fetch = async (url, queries) => {
    if (!accessToken) throw new Error("Access token is not provided");

    const config = {
      headers: {
        contentType: "application/json",
        authorization: `bearer ${accessToken}`,
      },
    };

    try {
      const newUrl = generateUrl(url, queries);
      return await axios.get(newUrl, config);
    } catch (err) {
      throw err;
    }
  };

  return fetch;
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
