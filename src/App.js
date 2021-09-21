import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProvideAuth } from "./hooks/use-auth";

// TODO: Handle api connection error
function App() {
  return (
    <ProvideAuth>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ProvideAuth>
  );
}

export default App;
