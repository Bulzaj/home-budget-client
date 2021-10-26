import Card from "../../components/card/card";
import { useCashFlow } from "../../hooks/use-cash-flow";

const ExpendituresSpecCard = (props) => {
  const { expendituresSpec } = useCashFlow();

  return <Card title="Expenditures Specification">Expenditures</Card>;
};

export default ExpendituresSpecCard;
