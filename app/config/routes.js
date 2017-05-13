// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

import Main from "../components/main";
import Promo from "../components/Promo";
var Login = require("../components/Login");
import Trader from "../components/Trader";
import Display from "../components/Display";
import Portfolio from "../components/Portfolio";
import News from "../components/News";
import Summary from "../components/Summary";
var Nav = require("../components/Nav");
import Chart from "../components/Chart";



module.exports = (
 <Router history={hashHistory}>

    <Route path="/" component={Main}>
    <Route path="login" component={Login} >
    </Route>
      {/* If user selects Child1 then show the appropriate component*/}
    <Route path="hub" component={Nav} >
    </Route>
    <Route path="portfolio" component={Display}>
    <Route path="trades" component={Portfolio}>
    </Route>
    <Route path="summary" component={Summary}>
    </Route>
    <Route path="charts" component={Chart}>
    </Route>
    </Route>
    <Route path="articles" component={News}>
    </Route>
    <Route path="new" component={Trader}>
    </Route>
    </Route>
</Router>
);