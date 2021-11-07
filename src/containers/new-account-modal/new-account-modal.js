import Form from "../../components/form/form";
import Modal from "../../components/modal/modal";
import { IoIosAddCircle } from "react-icons/io";
import { useAccounts } from "../../hooks/use-accounts";

const NewAccountModal = (props) => {
  const { currencies } = useAccounts();

  const option = (item) => (
    <Form.Option key={item.code} value={`${item.code} ${item.name}`} />
  );

  const createNewAccountHandler = (e) => {};

  return (
    <Modal
      title="New account"
      icon={IoIosAddCircle}
      onSuccess={createNewAccountHandler}
    >
      <Form>
        <Form.Group>
          <Form.Label>Account name</Form.Label>
          <Form.Input />
        </Form.Group>
        <Form.Group>
          <Form.Label>Start ammount</Form.Label>
          <Form.Input type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select currency</Form.Label>
          <Form.Select
            data={currencies}
            dataName="currencies_data"
            option={option}
          />
        </Form.Group>
      </Form>
    </Modal>
  );
};

export default NewAccountModal;
