// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Header Component
var Header = require("./Header");
var Login = require("./Login");
var Footer = require("./Footer");
var Demo = require("./Demo");

import Promo from "./Promo";

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
  <div className="container col-sm-10 col-md-5 col-lg-5">
    {this.props.children}
  </div>
  <Footer />
  </div>
  </div>
)}
}

export default Main;
