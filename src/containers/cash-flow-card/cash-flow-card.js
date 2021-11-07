import { ImCross } from "react-icons/im";
import Card from "../../components/card/card";
import { FaChartLine } from "react-icons/fa";
import { useSpec } from "../../hooks/use-spec";
import Chart from "react-google-charts";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/use-fetch";
import { URL_API_SPEC_CASH_FLOW } from "../../utill/url-consts";
import { useFilters } from "../../hooks/use-filter";
import Spinner from "../../components/spinner/spinner";

const CashFlowCard = (props) => {
  const { accessToken, selectedAccount } = props;
  const { fetch, isLoading } = useFetch(accessToken);
  const { cashFlow, setCashFlow } = useSpec();
  const { dateFilter } = useFilters();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCashFlow = async () => {
      if (!selectedAccount) return;

      const queries = {
        from: dateFilter?.from,
        to: dateFilter?.to,
      };

      const result = await fetch({
        url: `${URL_API_SPEC_CASH_FLOW}/${selectedAccount._id}`,
        queries: queries,
      });
      setCashFlow(result);
    };

    fetchCashFlow();
  }, [selectedAccount, dateFilter]);

  useEffect(() => {
    if (!cashFlow) return;
    const cashFlowArray = cashFlow.map((element) => [
      new Date(element.date),
      element.balance,
    ]);

    setData([["Date", "Balance"], ...cashFlowArray]);
  }, [selectedAccount, cashFlow]);

  let chart = (
    <Card.Message messageIcon={ImCross}>No cash flow found</Card.Message>
  );

  if (isLoading) chart = <Spinner />;

  if (cashFlow.length) {
    chart = (
      <Chart
        chartType="Line"
        data={data}
        height="100%"
        width="100%"
        options={{
          backgroundColor: {
            fill: "transparent",
          },
        }}
      />
    );
  }

  return (
    <Card title="Cash flow" icon={FaChartLine} styles={["wide"]}>
      {chart}
    </Card>
  );
};

export default CashFlowCard;
