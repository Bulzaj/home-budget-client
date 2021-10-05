import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API_ACCOUNT } from "../../utill/url-consts";
import { useAuth } from "../../hooks/use-auth";
import { useHistory } from "react-router";
import classes from "./dashboard.module.css";
import NavBar from "../../components/nav-bar/nav-bar";
import SideBar from "../../components/side-bar/side-bar";

const Dashboard = (props) => {
  const [accounts, setAccounts] = useState([]);
  const accessToken = useAuth().getAccessToken();
  const redirect = useHistory().push;

  useEffect(() => {
    const config = {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
    };
    const fetchAccounts = async () => {
      try {
        const accounts = await axios.get(URL_API_ACCOUNT, config);
        setAccounts(accounts);
      } catch (err) {
        redirect("/");
      }
    };
    fetchAccounts();
  }, [accessToken, redirect]);

  return (
    <div className={classes.container}>
      <NavBar>
        <SideBar.ToggleButton />
      </NavBar>
    </div>
  );
};

export default Dashboard;
