import SideBar from "../../components/side-bar/side-bar";
import List from "../../components/list/list";
import { useAccounts } from "../../hooks/use-accounts";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import { FiFilter } from "react-icons/fi";
import { useOperationsHistory } from "../../hooks/use-operations-history";
import { useFilters } from "../../hooks/use-filter";
import { useSpec } from "../../hooks/use-spec";

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
  const { fetchHistory } = useOperationsHistory();
  const { fetchExpendituresSpec, fetchCashFlow } = useSpec();
  const { setFrom, setTo, dateFilter } = useFilters();

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

  const onFilterSubmit = (e) => {
    e.preventDefault();
    fetchHistory();
    fetchExpendituresSpec();
    fetchCashFlow();
  };

  const onfromChange = (e) => {
    e.preventDefault();
    setFrom(new Date(e.target.value));
  };

  const onToChange = (e) => {
    e.preventDefault();
    setTo(new Date(e.target.value));
  };

  return (
    <SideBar>
      <SideBar.Group>
        <SideBar.Label>Accounts</SideBar.Label>
        {accountList}
      </SideBar.Group>
      <SideBar.Group>
        <SideBar.Label>Filters</SideBar.Label>
        <Form>
          <Form.Group>
            <Form.Label>From:</Form.Label>
            <Form.Date onChange={onfromChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>To:</Form.Label>
            <Form.Date onChange={onToChange} />
          </Form.Group>
          <Button onClick={onFilterSubmit} icon={FiFilter}>
            Filter
          </Button>
        </Form>
      </SideBar.Group>
    </SideBar>
  );
};

export default SideBarContainer;
