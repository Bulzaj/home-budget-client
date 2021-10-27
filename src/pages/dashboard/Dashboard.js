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
import { ProvideSpec } from "../../hooks/use-spec";
import { ProvideFilters } from "../../hooks/use-filter";
import ExpendituresSpecCard from "../../containers/expenditures-spec-card/expenditures-spec-card";
import CashFlowCard from "../../containers/cash-flow-card/cash-flow-card";

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
          <CashFlowCard />
        </DashboardLayout.Content>
      </DashboardLayout.Main>
    </DashboardLayout>
  );
};

const withContext = (Component) => {
  return (props) => {
    return (
      <ProvideAccounts>
        <ProvideFilters>
          <ProvideOperationsHistory>
            <ProvideSpec>
              <ProvideCollapseSideBar>
                <Component {...props} />
              </ProvideCollapseSideBar>
            </ProvideSpec>
          </ProvideOperationsHistory>
        </ProvideFilters>
      </ProvideAccounts>
    );
  };
};

export default withContext(Dashboard);
