import axios from "axios";
import { createContext, useContext, useState } from "react";
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

  const onLoginSuccess = (response, onDone) => {
    console.log(response);
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
