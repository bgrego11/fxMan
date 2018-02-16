
var React = require("react");
import Trader from "./Trader";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
render() {

    return (
<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="wrapper">
    <h1 className="port-head">
    Portfolio Viewer</h1>
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
    <div class="btn-group" role="group" aria-label="Basic example">
            <a href="#/portfolio/trades"><button type="button" className="btn btn-success">Trade Blotter</button></a>
            <a href="#/portfolio/summary"><button type="button" className="btn btn-danger">Account Summary</button>
            </a>
            <a href="#/portfolio/charts"><button type="button" className="btn btn-warning">Charts</button>
            </a>
</div>
<br></br>
        <Trader />
        <div className="col-lg-6 col-md-6 col-sm-12 xs-12">
    {this.props.children}
  </div>
    </div>
</div>
    )
}
}

module.exports = Display;