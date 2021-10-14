import axios from "axios";
import { useEffect, useState } from "react";
import {
  URL_API_ACCOUNT,
  URL_API_ACCOUNT_HISTORY,
} from "../../utill/url-consts";
import { useAuth } from "../../hooks/use-auth";
import { useHistory } from "react-router";
import NavBar from "../../components/nav-bar/nav-bar";
import SideBar from "../../components/side-bar/side-bar";
import { ProvideCollapseSideBar } from "../../hooks/use-collapse-sidebar";
import DashboardLayout from "../../layouts/dashboard-layout/dashboard-layout";
import List from "../../components/list/list";

// TODO: handle errors right way
const Dashboard = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSellectedAccount] = useState(null);
  const [operationsHistory, setOperationsHistory] = useState([]);
  const accessToken = useAuth().getAccessToken();
  const redirect = useHistory().push;

  // Fetch budget accounts
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

  // Fetch account opperations history
  useEffect(() => {
    const config = {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
    };
    const fetchHistory = async () => {
      try {
        const result = await axios.get(
          URL_API_ACCOUNT_HISTORY(selectedAccount),
          config
        );
        setOperationsHistory(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (accessToken && selectedAccount) fetchHistory();
  }, [accessToken, selectedAccount]);

  const itemWrapper = (item) => (
    <SideBar.Item>
      <h4>{item.name}</h4>
      <h4>
        {item.ammount} {item.currencyCode}
      </h4>
    </SideBar.Item>
  );

  const handleAccountClick = (_e, key) => {
    // select account
    setSellectedAccount(key);

    // close sidebar if:
    //  open in mobile mode
  };

  return (
    <DashboardLayout>
      <ProvideCollapseSideBar>
        <NavBar>
          <SideBar.ToggleButton />
        </NavBar>
        <DashboardLayout.Main>
          <SideBar>
            <SideBar.Label>Accounts</SideBar.Label>
            <List
              itemKey="_id"
              items={accounts}
              wrapper={itemWrapper}
              onItemClick={handleAccountClick}
            />
          </SideBar>
          <DashboardLayout.Content>Text of destiny</DashboardLayout.Content>
        </DashboardLayout.Main>
      </ProvideCollapseSideBar>
    </DashboardLayout>
  );
};

export default Dashboard;
