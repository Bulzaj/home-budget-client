import { Route } from "react-router-dom";

const PrivateRoute = (props) => (
  <Route path={props.path}>{props.children}</Route>
);

export default PrivateRoute;
