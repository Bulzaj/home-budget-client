import HistoryList from "./history-list";
import Card from "../../components/card/card";
import { AiOutlineCalendar } from "react-icons/ai";
import { useOperationsHistory } from "../../hooks/use-operations-history";

const HistoryCard = (props) => {
  const { selectedAccount } = props;
  const { operationsHistory } = useOperationsHistory();

  return (
    <Card title="History" icon={AiOutlineCalendar}>
      <HistoryList
        items={operationsHistory}
        selectedCurrency={selectedAccount?.currencyCode}
      />
    </Card>
  );
};

export default HistoryCard;
