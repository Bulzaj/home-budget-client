import { useAuth } from "../../hooks/use-auth";
import NavBar from "../../components/nav-bar/nav-bar";
import {
  ProvideCollapseSideBar,
  useCollapseSidebar,
} from "../../hooks/use-collapse-sidebar";
import DashboardLayout from "../../layouts/dashboard-layout/dashboard-layout";
import Card from "../../components/card/card";
import HistoryCard from "../../containers/history-card/history-card";
import SideBar from "../../components/side-bar/side-bar";
import SideBarContainer from "../../containers/sidebar/sidebar";
import { ProvideAccounts, useAccounts } from "../../hooks/use-accounts";
import { ProvideOperationsHistory } from "../../hooks/use-operations-history";
import ExpendituresSpecCard from "../../containers/expenditures-spec-card/expenditures-spec-card";

// TODO: handle errors right way
const Dashboard = () => {
  const { selectedAccount, selectAccount } = useAccounts();
  const accessToken = useAuth().getAccessToken();
  const { setNotVisible } = useCollapseSidebar();

  const onAccountClickHandler = (_e, key) => {
    selectAccount(key);
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
        <SideBarContainer onAccountClickHandler={onAccountClickHandler} />
      </DashboardLayout.Side>
      <DashboardLayout.Main>
        <DashboardLayout.Content>
          <HistoryCard
            selectedAccount={selectedAccount}
            accessToken={accessToken}
          />
          <ExpendituresSpecCard accessToken={accessToken} />
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

const withContext = (Component) => {
  return (props) => {
    return (
      <ProvideAccounts>
        <ProvideOperationsHistory>
          <ProvideCollapseSideBar>
            <Component {...props} />
          </ProvideCollapseSideBar>
        </ProvideOperationsHistory>
      </ProvideAccounts>
    );
  };
};

export default withContext(Dashboard);
