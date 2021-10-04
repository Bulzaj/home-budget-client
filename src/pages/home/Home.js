import LoginForm from "../../containers/login-form/login-form";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <LoginForm />
    </div>
  );
};

export default Home;
