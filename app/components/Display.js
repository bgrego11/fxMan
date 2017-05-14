
var React = require("react");
import Trader from "./Trader";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
render() {

    return (
<div className="col-md-12 col-sm-12 col-lg-12 well display">
    <h1 className="well port-head">
    Portfolio Viewer</h1>
    <div className="well col-sm-12 col-md-3 col-lg-3">
        <div class="list-group">
            <a href="#/portfolio/trades"><button type="button" className="list-group-item btn btn-default">Trade Blotter</button></a>
            <a href="#/portfolio/summary"><button type="button" className="list-group-item btn btn-default">Account Summary</button>
            </a>
            <a href="#/portfolio/charts"><button type="button" className="list-group-item btn btn-default">Charts</button>
            </a>
        </div>
        <Trader />
    </div>
    <div className="col-sm-12 col-md-9 col-lg-9">
    {this.props.children}
  </div>


</div>
    )
}
}

module.exports = Display;