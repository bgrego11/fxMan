// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
import PropTypes from 'prop-types';

// Include the Header Component
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";
import Demo from"./Demo";
import Nav from "./Nav";
import Create from "./Create";
import Promo from "./Promo";
import Trader from "./Trader";
import Portfolio from "./Portfolio";
import Display from "./Display";
import News from "./News";
import Intro from "./Intro"

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
  <div className="container-fluid col-xs-12 col-sm-12 col-md-12 col-lg-12">
    {this.props.children}
  </div>
  <Footer />
  </div>
  </div>
)}
}

export default Main;
