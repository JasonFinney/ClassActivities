import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import home from "./components/pages/home";
import discover from "./components/pages/discover";
import search from "./components/pages/search";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={home} />
      <Route exact path="/discover" component={discover} />
      <Route exact path="/search" component={search} />
    </div>
  </Router>
);

export default App;
