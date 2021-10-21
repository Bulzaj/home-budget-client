import HistoryList from "./history-list";
import HistoryFooter from "./history-footer";
import Card from "../../components/card/card";
import { AiOutlineCalendar } from "react-icons/ai";
import useFetchHistory from "../../hooks/use-fetch-history";

const HistoryCard = (props) => {
  const { accessToken, selectedAccount } = props;
  const { operationsHistory, fetch, setFilterData } = useFetchHistory(
    accessToken,
    selectedAccount
  );

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetch();
  };

  const handleFromChange = (e) => {
    setFilterData((prevState) => {
      return {
        ...prevState,
        from: e.target.value,
      };
    });
  };

  const handleToChange = (e) => {
    setFilterData((prevState) => {
      return {
        ...prevState,
        to: e.target.value,
      };
    });
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
