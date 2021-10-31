import { useAuth } from "../../hooks/use-auth";
import NavBar from "../../components/nav-bar/nav-bar";
import {
  ProvideCollapseSideBar,
  useCollapseSidebar,
} from "../../hooks/use-collapse-sidebar";
import DashboardLayout from "../../layouts/dashboard-layout/dashboard-layout";
import HistoryCard from "../../containers/history-card/history-card";
import SideBar from "../../components/side-bar/side-bar";
import SideBarContainer from "../../containers/sidebar/sidebar";
import { ProvideAccounts, useAccounts } from "../../hooks/use-accounts";
import { ProvideOperationsHistory } from "../../hooks/use-operations-history";
import { ProvideSpec } from "../../hooks/use-spec";
import { ProvideFilters } from "../../hooks/use-filter";
import ExpendituresSpecCard from "../../containers/expenditures-spec-card/expenditures-spec-card";
import CashFlowCard from "../../containers/cash-flow-card/cash-flow-card";
import { FiLogOut } from "react-icons/fi";
import Button from "../../components/button/button";
import { ProvideModal } from "../../hooks/use-modal";
import { useHistory } from "react-router";
import NewAccountModal from "../../containers/new-account-modal/new-account-modal";

const Dashboard = () => {
  const { selectedAccount, selectAccount } = useAccounts();
  const accessToken = useAuth().getAccessToken();
  const { setNotVisible } = useCollapseSidebar();
  const { logout } = useAuth();
  const { push } = useHistory();

  const logoutClickHandler = (e) => {
    e.preventDefault();
    logout(push("/"));
  };

  return (
    <DashboardLayout>
      <NewAccountModal />
      <DashboardLayout.Nav>
        <NavBar>
          <NavBar.Item>
            <SideBar.ToggleButton />
          </NavBar.Item>
          <NavBar.Item>
            <h3>{selectedAccount?.name}</h3>
          </NavBar.Item>
          <NavBar.Item>
            <Button
              icon={FiLogOut}
              styles={["font-light"]}
              onClick={logoutClickHandler}
            >
              Logout
            </Button>
          </NavBar.Item>
        </NavBar>
      </DashboardLayout.Nav>
      <DashboardLayout.Side>
        <SideBarContainer accessToken={accessToken} />
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
              <ProvideModal>
                <ProvideCollapseSideBar>
                  <Component {...props} />
                </ProvideCollapseSideBar>
              </ProvideModal>
            </ProvideSpec>
          </ProvideOperationsHistory>
        </ProvideFilters>
      </ProvideAccounts>
    );
  };
};

export default withContext(Dashboard);
