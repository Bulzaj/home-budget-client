import HistoryList from "./history-list";
import HistoryFooter from "./history-footer";
import Card from "../../components/card/card";
import { AiOutlineCalendar } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API_ACCOUNT_HISTORY } from "../../utill/url-consts";

const HistoryCard = (props) => {
  const { accessToken, selectedAccount } = props;
  const [operationsHistory, setOperationsHistory] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
    };
    const fetchHistory = async () => {
      try {
        const result = await axios.get(
          URL_API_ACCOUNT_HISTORY(selectedAccount._id),
          config
        );
        setOperationsHistory(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (accessToken && selectedAccount) fetchHistory();
  }, [accessToken, selectedAccount]);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
  };

  const handleFromChange = () => {
    console.log("from changed");
  };

  const handleToChange = () => {
    console.log("to changed");
  };

  return (
    <Card
      title="History"
      icon={AiOutlineCalendar}
      footer={
        <HistoryFooter
          onClick={handleFilterSubmit}
          fromChange={handleFromChange}
          toChange={handleToChange}
        />
      }
    >
      <HistoryList
        items={operationsHistory}
        selectedCurrency={selectedAccount?.currencyCode}
      />
    </Card>
  );
};

export default HistoryCard;
