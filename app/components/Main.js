// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Header Component
var Header = require("./Header");
var Login = require("./Login");
var Footer = require("./Footer");
var Demo = require("./Demo");
var Nav = require("./Nav");
var Create = require("./Create");

import Promo from "./Promo";
import Trader from "./Trader";
import Portfolio from "./Portfolio";
import Display from "./Display";
import News from "./News";

class Main extends React.Component {
  constructor(props) {
    super(props);
  // Here we render the function
  }
  render() {

    return (
// Here we deploy the header component as though it were any other HTML element
  <div><Header />
  <div>
  <div className="container-fluid col-sm-12 col-md-12 col-lg-12">
    {this.props.children}
  </div>
  <Footer />
  </div>
  </div>
)}
}

export default Main;
