
var React = require("react");
import Trader from "./Trader";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
render() {

    return (
<div className="col-lg-12" id="wrapper">
    <h1 className="port-head">
    Portfolio Viewer</h1>
    <div className="col-lg-11">
    <div class="btn-group" role="group" aria-label="Basic example">
            <a href="#/portfolio/trades"><button type="button" className="btn btn-success">Trade Blotter</button></a>
            <a href="#/portfolio/summary"><button type="button" className="btn btn-danger">Account Summary</button>
            </a>
            <a href="#/portfolio/charts"><button type="button" className="btn btn-warning">Charts</button>
            </a>
</div>
<br></br>
        <Trader />
    </div>
    <div className="col-lg-11">
    {this.props.children}
  </div>


</div>
    )
}
}

module.exports = Display;