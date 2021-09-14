import { useEffect } from "react";
import { useHistory } from "react-router";

// TODO: create popup modal which init account settings (e.g. currency)
const Dashboard = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) history.push("/");
  });

  return <h1>Welcone on dashboard</h1>;
};
export default Dashboard;
