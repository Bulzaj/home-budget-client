import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API_ACCOUNT } from "../../utill/url-consts";
import { useAuth } from "../../hooks/use-auth";
import { useHistory } from "react-router";
import NavBar from "../../components/nav-bar/nav-bar";
import SideBar from "../../components/side-bar/side-bar";
import {
  ProvideCollapseSideBar,
  useCollapseSidebar,
} from "../../hooks/use-collapse-sidebar";
import DashboardLayout from "../../layouts/dashboard-layout/dashboard-layout";
import List from "../../components/list/list";
import Card from "../../components/card/card";
import HistoryCard from "../../containers/history-card/history-card";

// TODO: handle errors right way
const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSellectedAccount] = useState(null);
  const accessToken = useAuth().getAccessToken();
  const redirect = useHistory().push;
  const { setNotVisible } = useCollapseSidebar();

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
        setAccounts(accounts.data);
      } catch (err) {
        redirect("/");
      }
    };
    fetchAccounts();
  }, [accessToken, redirect]);

  const itemWrapper = (item) => (
    <SideBar.Item>
      <h4>{item.name}</h4>
      <h4>
        {item.ammount} {item.currencyCode}
      </h4>
    </SideBar.Item>
  );

  const handleAccountClick = (_e, key) => {
    const selectedAccount = accounts.find((account) => account._id === key);
    delete selectedAccount.operationsHistory;
    setSellectedAccount(selectedAccount);
    setNotVisible();
  };

  return (
    <DashboardLayout>
      <DashboardLayout.Nav>
        <NavBar>
          <NavBar.Item>
            <SideBar.ToggleButton />
          </NavBar.Item>
          <NavBar.Item>
            <h3>{selectedAccount?.name}</h3>
          </NavBar.Item>
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
          <HistoryCard
            selectedAccount={selectedAccount}
            accessToken={accessToken}
          />
          <Card title="Card 1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              feugiat eros id sapien malesuada vehicula. Donec in porttitor
              tortor. Mauris pellentesque dignissim magna ut posuere. Morbi elit
              mi, gravida suscipit felis id, tincidunt pretium mi. Nam pharetra
              metus sit amet feugiat dignissim. Proin in luctus nibh, ac
              accumsan elit. In condimentum sodales bibendum. Ut vitae malesuada
              urna.
            </p>
          </Card>
          <Card title="Card 1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              feugiat eros id sapien malesuada vehicula. Donec in porttitor
              tortor. Mauris pellentesque dignissim magna ut posuere. Morbi elit
              mi, gravida suscipit felis id, tincidunt pretium mi. Nam pharetra
              metus sit amet feugiat dignissim. Proin in luctus nibh, ac
              accumsan elit. In condimentum sodales bibendum. Ut vitae malesuada
              urna.
            </p>
          </Card>
          <Card title="Card 1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              feugiat eros id sapien malesuada vehicula. Donec in porttitor
              tortor. Mauris pellentesque dignissim magna ut posuere. Morbi elit
              mi, gravida suscipit felis id, tincidunt pretium mi. Nam pharetra
              metus sit amet feugiat dignissim. Proin in luctus nibh, ac
              accumsan elit. In condimentum sodales bibendum. Ut vitae malesuada
              urna.
            </p>
          </Card>
        </DashboardLayout.Content>
      </DashboardLayout.Main>
    </DashboardLayout>
  );
};

const withSidebarContext = (Component) => {
  return (props) => {
    return (
      <ProvideCollapseSideBar>
        <Component {...props} />
      </ProvideCollapseSideBar>
    );
  };
};

export default withSidebarContext(Dashboard);
