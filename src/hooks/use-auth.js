import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { URL_API_AUTH } from "../utill/url-consts";
import useLocalStorage from "./use-local-storage";

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
  const [errors, setErrors] = useState([]);
  const localStorage = useLocalStorage();

  useEffect(() => {
    console.log("asdsad");
    const accessToken = localStorage.get("accessToken");

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
    setErrors([]);
    setUser({ email: response.data.email });

    localStorage.set("accessToken", response.data.accessToken);
    localStorage.set("refreshToken", response.data.refreshToken);
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
    errors,
    register,
    login,
  };
};
