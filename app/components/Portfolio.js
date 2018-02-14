var React = require("react");
var axios = require("axios");
var moment = require("moment");


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: sessionStorage.id,
      trades: []
    };
      this.close = this.close.bind(this);
    // this.reval = this.reval.bind(this); // Here we render the function
  }
  componentWillMount() {
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
  close (evt) {
    evt.preventDefault();
    self = this;
    var id = evt.target.getAttribute("data-id");
    axios.get("/close/"+id).then(function(res) {
        console.log(res.data);

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
                  <th><h1>Close Date</h1></th>
                  <th><h1>Close Amount</h1></th>
                  <th><h1>Profit</h1></th>
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
                    <td>{deal.valueDate}</td>
                    <td>{deal.closeVal}</td>
                    <td>$ {deal.profit}</td>

                    <td>
                    { deal.status ==="open" ? (
                    <button type="button" className="btn btn-danger btn-lg" data-id={deal._id} onClick={this.close}>
                    sell
                    </button>
                    ) : (
                      <div>closed</div>
                    )
                    }</td>

		            </tr>
                      )
                      }
              
              </tbody>
            </table>

                 
                      
                      
                  
    )
  }
}


module.exports = Portfolio;