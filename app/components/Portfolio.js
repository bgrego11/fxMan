var React = require("react");
var axios = require("axios");
var moment = require("moment");




// Create the Header component
// Notice how the header uses React.createclassName
// Notice how it uses a render function which specifies what will be displayed by the component
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: sessionStorage.id,
      trades: []
    };

    // this.reval = this.reval.bind(this); // Here we render the function
  }
  componentDidMount() {
    console.log(this.state)
    var self = this;
    axios.post("/portfolio",{id: self.state.client}).then(function(res) {
      var trades = res.data;
      self.state.trades = trades;
      self.setState({
        trades: self.state.trades
      })
  })
  }

  render() {

    return ( 
          <table className="container">
              <thead>
                <tr>
                  <th><h1>Buy CCY</h1></th>
                  <th><h1>Buy AMT</h1></th>
                  <th><h1>Opening AMT</h1></th>
                  <th><h1>Trade Date</h1></th>
                  <th><h1>Close Trade?</h1></th>
                </tr>
              </thead>
              <tbody>
                { this.state.trades.map(deal =>
                  <tr key={deal._id}>
                    <td>{deal.buyCcy}</td>
                    <td>{deal.buyAmt}</td>
                    <td>$ {deal.sellAmt}</td>
                    <td>{deal.tradeDate}</td>
                    <td><button type="button" className="btn btn-default btn-lg">
  <span className="glyphicon glyphicon-random" aria-hidden="true"></span>
</button></td>

		            </tr>
                      )
                      }
              
              </tbody>
            </table>

                 
                      
                      
                  
    )
  }
}


module.exports = Portfolio;