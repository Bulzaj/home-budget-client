import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/use-auth";
import axios from "axios";
import { URL_API_CURRENCIES } from "../../utill/url-consts";

const Dashboard = (props) => {
  const history = useHistory();
  const auth = useAuth();
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    if (!auth.user) history.push("/");
  }, [auth.user, history]);

  useEffect(() => {
    let mounted = true;
    const getCurrencies = async () => {
      const currencies = await axios.get(URL_API_CURRENCIES);
      const currenciesArray = Object.values(currencies.data);

      setCurrencies((prevState) => {
        return [...prevState, ...currenciesArray];
      });
    };

    if (mounted) getCurrencies();

    return () => (mounted = false);
  }, []);

  return null;
};
export default Dashboard;
