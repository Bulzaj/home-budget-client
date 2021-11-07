import SideBar from "../../components/side-bar/side-bar";
import Form from "../../components/form/form";
import Button from "../../components/button/button";
import { FiFilter } from "react-icons/fi";
import { useFilters } from "../../hooks/use-filter";
import AccountsGroup from "./accounts-group";
import useFormData from "../../hooks/use-form-data";

const SideBarContainer = (props) => {
  const { setFrom, setTo } = useFilters();
  const [formData, setData] = useFormData();

  const onFilterSubmit = (e) => {
    e.preventDefault();
    setFrom(formData.from);
    setTo(formData.to);
  };

  const onfromChange = (e) => {
    e.preventDefault();
    setData({ from: e.target.value });
  };

  const onToChange = (e) => {
    e.preventDefault();
    setData({ to: e.target.value });
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
