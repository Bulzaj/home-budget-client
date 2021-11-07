import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import Card from "../../components/card/card";
import { useSpec } from "../../hooks/use-spec";
import { FaChartPie } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import useFetch from "../../hooks/use-fetch";
import { URL_API_SPEC_EXPENDITURES } from "../../utill/url-consts";
import Spinner from "../../components/spinner/spinner";
import { useFilters } from "../../hooks/use-filter";

const ExpendituresSpecCard = (props) => {
  const { accessToken, selectedAccount } = props;
  const { fetch, isLoading } = useFetch(accessToken);
  const { expendituresSpec, setExpendituresSpec } = useSpec();
  const { dateFilter } = useFilters();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!selectedAccount) return;

    const fetchExpendituresSpec = async () => {
      const queries = {
        from: dateFilter?.from,
        to: dateFilter?.to,
      };

      const result = await fetch({
        url: `${URL_API_SPEC_EXPENDITURES}/${selectedAccount._id}`,
        queries: queries,
      });
      setExpendituresSpec(result);
    };

    fetchExpendituresSpec();
  }, [selectedAccount]);

  useEffect(() => {
    if (!expendituresSpec) return;

    const expnedituresArray = Object.keys(expendituresSpec).map((key) => [
      key,
      expendituresSpec[key],
    ]);
    setData([["Category", "Ammount"], ...expnedituresArray]);
  }, [selectedAccount, expendituresSpec]);

  let chart = (
    <Card.Message messageIcon={ImCross}>No expenditures found</Card.Message>
  );

  if (isLoading) chart = <Spinner />;

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
