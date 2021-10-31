import SideBar from "../../components/side-bar/side-bar";
import List from "../../components/list/list";
import Button from "../../components/button/button";
import { useAccounts } from "../../hooks/use-accounts";
import { useModal } from "../../hooks/use-modal";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import { URL_API_ACCOUNT } from "../../utill/url-consts";
import { useCollapseSidebar } from "../../hooks/use-collapse-sidebar";
import Spinner from "../../components/spinner/spinner";

const itemWrapper = (item) => (
  <SideBar.Item>
    <h4>{item.name}</h4>
    <h4>
      {item.ammount} {item.currencyCode}
    </h4>
  </SideBar.Item>
);

const AccountsGroup = (props) => {
  const { accounts, setAccounts, selectAccount } = useAccounts();
  const { open } = useModal();
  const { setNotVisible } = useCollapseSidebar();
  const { fetch, isLoading } = useFetch(props.accessToken);

  useEffect(() => {
    const fetchAccounts = async () => {
      const result = await fetch(URL_API_ACCOUNT);
      setAccounts(result);
    };
    if (!accounts) {
      fetchAccounts();
    }
  }, [isLoading]);

  const newAccountHandler = (e) => {
    e.preventDefault();
    open();
  };

  const selectAccountHandler = (_e, key) => {
    setNotVisible();
    selectAccount(key);
  };

  let accountList = <Spinner />;
  if (accounts)
    accountList = (
      <List
        itemKey="_id"
        items={accounts}
        wrapper={itemWrapper}
        onItemClick={selectAccountHandler}
      />
    );

  return (
    <SideBar.Group>
      <SideBar.Label>Accounts</SideBar.Label>
      {accountList}
      <Button icon={AiOutlineAppstoreAdd} onClick={newAccountHandler}>
        New account
      </Button>
    </SideBar.Group>
  );
};

export default AccountsGroup;
