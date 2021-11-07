import HistoryList from "./history-list";
import Card from "../../components/card/card";
import { AiOutlineCalendar } from "react-icons/ai";
import { useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import { useSpec } from "../../hooks/use-spec";
import { useFilters } from "../../hooks/use-filter";
import { URL_API_SPEC_HISTORY } from "../../utill/url-consts";
import Spinner from "../../components/spinner/spinner";

const HistoryCard = (props) => {
  const { selectedAccount, accessToken } = props;
  const { operationsHistory, setOperationsHistory } = useSpec();
  const { dateFilter } = useFilters();
  const { fetch, isLoading } = useFetch(accessToken);

  useEffect(() => {
    if (!selectedAccount) return;

    const fetchOperationsHistory = async () => {
      const queries = {
        from: dateFilter?.from,
        to: dateFilter?.to,
      };

      const result = await fetch({
        url: `${URL_API_SPEC_HISTORY}/${selectedAccount._id}`,
        queries: queries,
      });

      setOperationsHistory(result);
    };

    fetchOperationsHistory();
  }, [selectedAccount, dateFilter]);

  let historyCard = <Spinner />;
  if (!isLoading)
    historyCard = (
      <HistoryList
        items={operationsHistory}
        selectedCurrency={selectedAccount?.currencyCode}
      />
    );

  return (
    <Card title="History" icon={AiOutlineCalendar}>
      {historyCard}
    </Card>
  );
};

export default HistoryCard;
