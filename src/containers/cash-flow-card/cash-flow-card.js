import { ImCross } from "react-icons/im";
import Card from "../../components/card/card";
import { FaChartLine } from "react-icons/fa";
import { useSpec } from "../../hooks/use-spec";
import Chart from "react-google-charts";
import { useState, useEffect } from "react";

const CashFlowCard = (props) => {
  const { cashFlow } = useSpec();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!cashFlow) return;
    const cashFlowArray = cashFlow.map((element) => [
      new Date(element.date),
      element.balance,
    ]);

    setData([["Date", "Balance"], ...cashFlowArray]);
  }, [cashFlow]);

  let chart = (
    <Card.Message messageIcon={ImCross}>No cash flow found</Card.Message>
  );
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
