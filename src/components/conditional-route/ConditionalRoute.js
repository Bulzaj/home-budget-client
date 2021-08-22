import { Redirect, Route } from "react-router-dom";

const ConditionalRoute = (props) => {
  let route = <Redirect to="/" />;
  if (props.condition) <Route path={props.path}>{props.children}</Route>;

  return { ...route };
};

export default ConditionalRoute;
