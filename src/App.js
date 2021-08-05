import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const navHashLinks = [{ name: "Product", to: "#product" }];

  return (
    <div className="app">
      <Router>
        <Navbar hashLinks={navHashLinks} />
        <Switch>
          <Route path="/">
            <main className="app__main">
              <Home />
            </main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
