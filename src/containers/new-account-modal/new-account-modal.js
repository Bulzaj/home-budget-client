import Form from "../../components/form/form";
import Modal from "../../components/modal/modal";
import { IoIosAddCircle } from "react-icons/io";
import { useAccounts } from "../../hooks/use-accounts";
import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import { URL_API_CURRENCIES } from "../../utill/url-consts";
import useFormData from "../../hooks/use-form-data";

const NewAccountModal = (props) => {
  const { currencies, setCurrencies } = useAccounts();
  const { fetch } = useFetch();
  const [formData, setData] = useFormData();

  const option = (item) => (
    <Form.Option key={item.code} value={`${item.code} ${item.name}`} />
  );

  useEffect(() => {
    const fetchCurrencies = async () => {
      const result = await fetch({ url: URL_API_CURRENCIES });
      setCurrencies(result);
    };
    fetchCurrencies();
  }, []);

  const accountNameChangeHandler = (e) => {
    setData({ accountName: e.target.value });
  };

  const startAmmountChangeHandler = (e) => {
    setData({ ammount: e.target.value });
  };

  const currencyChangeHandler = (e) => {
    setData({ currency: e.target.value.split(" ")[0] });
  };

  const createNewAccountHandler = (e) => {
    console.log(formData);
  };

  return (
    <Modal
      title="New account"
      icon={IoIosAddCircle}
      onSuccess={createNewAccountHandler}
    >
      <Form>
        <Form.Group>
          <Form.Label>Account name</Form.Label>
          <Form.Input onChange={accountNameChangeHandler} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Start ammount</Form.Label>
          <Form.Input type="number" onChange={startAmmountChangeHandler} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select currency</Form.Label>
          <Form.Select
            data={currencies}
            dataName="currencies_data"
            option={option}
            onChange={currencyChangeHandler}
          />
        </Form.Group>
      </Form>
    </Modal>
  );
};

export default NewAccountModal;
