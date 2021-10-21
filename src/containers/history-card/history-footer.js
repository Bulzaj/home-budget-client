import Form from "../../components/form/form";
import Button from "../../components/button/button";
import { FiFilter } from "react-icons/fi";

const HistoryFooter = (props) => {
  return (
    <Form styles={["row", "space-around"]}>
      <Form.Group styles={["column"]}>
        <Form.Label>From:</Form.Label>
        <Form.Date onChange={props.fromChange} />
      </Form.Group>
      <Form.Group styles={["column"]}>
        <Form.Label>To:</Form.Label>
        <Form.Date onChange={props.toChange} />
      </Form.Group>
      <Button onClick={props.onClick} icon={FiFilter}>
        Filter
      </Button>
    </Form>
  );
};

export default HistoryFooter;
