import { useState } from "react";
import LoginForm from "../../containers/auth-forms/login-form";
import RegistrationForm from "../../containers/auth-forms/registration-form";
import classes from "./home.module.css";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const onToggleFormHandler = (e) => {
    e.preventDefault();
    setIsLogin((prevState) => !prevState);
  };

  let selectedForm = <LoginForm onToggleFormClick={onToggleFormHandler} />;
  if (!isLogin)
    selectedForm = <RegistrationForm onToggleFormClick={onToggleFormHandler} />;

  return <div className={classes.home}>{selectedForm}</div>;
};

export default Home;
