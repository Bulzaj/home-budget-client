import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../UserContext";

const PrivateRoute = (props) => {
  return (
    <UserContext.Consumer>
      {(user) =>
        user ? (
          <Route path={props.path}>{props.children}</Route>
        ) : (
          <Redirect to="/" />
        )
      }
    </UserContext.Consumer>
  );
};

export default PrivateRoute;
