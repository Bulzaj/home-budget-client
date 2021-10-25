import SideBar from "../../components/side-bar/side-bar";
import List from "../../components/list/list";
import { useAccounts } from "../../hooks/use-accounts";

const itemWrapper = (item) => (
  <SideBar.Item>
    <h4>{item.name}</h4>
    <h4>
      {item.ammount} {item.currencyCode}
    </h4>
  </SideBar.Item>
);

const SideBarContainer = (props) => {
  const { accounts } = useAccounts();

  let accountList = null;
  if (accounts)
    accountList = (
      <List
        itemKey="_id"
        items={accounts}
        wrapper={itemWrapper}
        onItemClick={props.onAccountClickHandler}
      />
    );

  return (
    <SideBar>
      <SideBar.Group>
        <SideBar.Label>Accounts</SideBar.Label>
        {accountList}
      </SideBar.Group>
      <SideBar.Label>Filters</SideBar.Label>
    </SideBar>
  );
};

export default SideBarContainer;
