import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API_ACCOUNT } from "../../utill/url-consts";
import { useAuth } from "../../hooks/use-auth";
import { useHistory } from "react-router";
import classes from "./dashboard.module.css";
import NavBar from "../../components/nav-bar/nav-bar";
import SideBar from "../../components/side-bar/side-bar";
import { ProvideCollapseSideBar } from "../../hooks/use-collapse-sidebar";

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
        setAccounts(accounts.data[0].accounts);
      } catch (err) {
        redirect("/");
      }
    };
    fetchAccounts();
  }, [accessToken, redirect]);

  return (
    <div className={classes.container}>
      <ProvideCollapseSideBar>
        <NavBar>
          <SideBar.ToggleButton />
        </NavBar>
        <div className={classes.main}>
          <SideBar>
            <SideBar.Label>Accounts</SideBar.Label>
            {accounts.map((account) => {
              return (
                <SideBar.Item key={account.name}>
                  <h4>{account.name}</h4>
                  <h4>
                    {account.ammount} {account.currencyCode}
                  </h4>
                </SideBar.Item>
              );
            })}
          </SideBar>
          <div className={classes.content}>Text of destiny</div>
        </div>
      </ProvideCollapseSideBar>
    </div>
  );
};

export default Dashboard;
