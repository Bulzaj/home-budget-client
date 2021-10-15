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
import Card from "../../components/card/card";

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
    <ProvideCollapseSideBar>
      <DashboardLayout>
        <DashboardLayout.Nav>
          <NavBar>
            <SideBar.ToggleButton />
          </NavBar>
        </DashboardLayout.Nav>
        <DashboardLayout.Side>
          <SideBar>
            <SideBar.Label>Accounts</SideBar.Label>
            <List
              itemKey="_id"
              items={accounts}
              wrapper={itemWrapper}
              onItemClick={handleAccountClick}
            />
          </SideBar>
        </DashboardLayout.Side>
        <DashboardLayout.Main>
          <DashboardLayout.Content>
            <Card title="Card 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                feugiat eros id sapien malesuada vehicula. Donec in porttitor
                tortor. Mauris pellentesque dignissim magna ut posuere. Morbi
                elit mi, gravida suscipit felis id, tincidunt pretium mi. Nam
                pharetra metus sit amet feugiat dignissim. Proin in luctus nibh,
                ac accumsan elit. In condimentum sodales bibendum. Ut vitae
                malesuada urna.
              </p>
            </Card>
            <Card title="Card 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                feugiat eros id sapien malesuada vehicula. Donec in porttitor
                tortor. Mauris pellentesque dignissim magna ut posuere. Morbi
                elit mi, gravida suscipit felis id, tincidunt pretium mi. Nam
                pharetra metus sit amet feugiat dignissim. Proin in luctus nibh,
                ac accumsan elit. In condimentum sodales bibendum. Ut vitae
                malesuada urna.
              </p>
            </Card>
            <Card title="Card 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                feugiat eros id sapien malesuada vehicula. Donec in porttitor
                tortor. Mauris pellentesque dignissim magna ut posuere. Morbi
                elit mi, gravida suscipit felis id, tincidunt pretium mi. Nam
                pharetra metus sit amet feugiat dignissim. Proin in luctus nibh,
                ac accumsan elit. In condimentum sodales bibendum. Ut vitae
                malesuada urna.
              </p>
            </Card>
            <Card title="Card 1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                feugiat eros id sapien malesuada vehicula. Donec in porttitor
                tortor. Mauris pellentesque dignissim magna ut posuere. Morbi
                elit mi, gravida suscipit felis id, tincidunt pretium mi. Nam
                pharetra metus sit amet feugiat dignissim. Proin in luctus nibh,
                ac accumsan elit. In condimentum sodales bibendum. Ut vitae
                malesuada urna.
              </p>
            </Card>
          </DashboardLayout.Content>
        </DashboardLayout.Main>
      </DashboardLayout>
    </ProvideCollapseSideBar>
  );
};

export default Dashboard;
