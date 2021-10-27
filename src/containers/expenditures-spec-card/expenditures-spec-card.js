import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import Card from "../../components/card/card";
import { useCashFlow } from "../../hooks/use-cash-flow";
import { FaChartPie } from "react-icons/fa";

const ExpendituresSpecCard = (props) => {
  const { expendituresSpec } = useCashFlow();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!expendituresSpec) return;
    const expnedituresArray = Object.keys(expendituresSpec).map((key) => [
      key,
      expendituresSpec[key],
    ]);
    setData([["Category", "Ammount"], ...expnedituresArray]);
  }, [expendituresSpec]);

  let chart = null;
  if (data && data.length > 1) {
    chart = (
      <Chart
        chartType="PieChart"
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
    <Card title="Expenditures Specification" icon={FaChartPie}>
      {chart}
    </Card>
  );
};

export default ExpendituresSpecCard;
