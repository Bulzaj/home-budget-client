import SideBar from "../../components/side-bar/side-bar";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import { FiFilter } from "react-icons/fi";
import { useOperationsHistory } from "../../hooks/use-operations-history";
import { useFilters } from "../../hooks/use-filter";
import { useSpec } from "../../hooks/use-spec";
import AccountsGroup from "./accounts-group";

const SideBarContainer = (props) => {
  const { fetchHistory } = useOperationsHistory();
  const { fetchExpendituresSpec, fetchCashFlow } = useSpec();
  const { setFrom, setTo } = useFilters();

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
      <AccountsGroup accessToken={props.accessToken} />
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
        </Form>
        <Button onClick={onFilterSubmit} icon={FiFilter}>
          Filter
        </Button>
      </SideBar.Group>
    </SideBar>
  );
};

export default SideBarContainer;
