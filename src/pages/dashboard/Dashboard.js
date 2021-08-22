import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

const Dashboard = (props) => {
  const [keycloak, setKeycloak] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const keycloak = new Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setIsAuth(authenticated);
    });
  }, []);

  if (keycloak) {
    if (isAuth) {
      return <h1>Welcome in Home Budget Dashboard</h1>;
    } else return <h1>Unable to login</h1>;
  } else return <h1>Initializing Keycloak</h1>;
};
export default Dashboard;
