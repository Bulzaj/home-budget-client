import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { URL_API_AUTH } from "../utill/url-consts";

const authContext = createContext();

export const ProvideAuth = (props) => {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>{props.children}</authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchUser = async (accessToken) => {
      const reqOptions = {
        headers: {
          authorization: `bearer ${accessToken}`,
        },
      };

      const user = await axios
        .get(URL_API_AUTH + "/user", reqOptions)
        .catch((err) => console.error(err));

      if (user) setUser({ email: user.data.email });
    };
    fetchUser(accessToken);
  }, []);

  const onLoginSuccess = (response, onDone) => {
    setUser({ email: response.data.email, id: response.data.id });

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    onDone && onDone();
  };

  const register = async (credentials, onDone) =>
    onLoginSuccess(
      await axios.post(URL_API_AUTH + "/register", credentials),
      onDone
    );

  const login = async (credentials, onDone) =>
    onLoginSuccess(
      await axios.post(URL_API_AUTH + "/login", credentials),
      onDone
    );

  return {
    user,
    register,
    login,
  };
};
