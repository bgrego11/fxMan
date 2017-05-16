var React = require("react");
var axios = require("axios");
var moment = require("moment");




// Create the Header component
// Notice how the header uses React.createclassName
// Notice how it uses a render function which specifies what will be displayed by the component
class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: sessionStorage.id,
      tradeCount: [],
      totalBuy: 0,
      pnl: 0,

    };
      
    // this.reval = this.reval.bind(this); // Here we render the function
  }
  componentDidMount() {
    console.log(this.state)
    var self = this;
    axios.post("/Summary",{id: self.state.client}).then(function(res) {
      var tradeCount = res.data.tradeCount;
      var pnl = res.data.pnl;
      var totalBuy = res.data.totalBuy;
      self.state.tradeCount = tradeCount;
      self.state.pnl = pnl;
      self.state.totalBuy = totalBuy;
      self.setState({
        tradeCount: self.state.tradeCount,
        pnl: self.state.pnl,
        totalBuy: self.state.totalBuy
      })
  })
  }
  


  
  render() {

    return ( 
          <table className="container">
              <thead>
                <tr>
                  <th><h1>Total Number of Deals</h1></th>
                  <th><h1>Amount purchased USD</h1></th>
                  <th><h1>Realized Profit</h1></th>
                </tr>
              </thead>
              <tbody>
                
                  <tr>
                    <td>{this.state.tradeCount}</td>
                    <td>$ {this.state.totalBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td>$ {this.state.pnl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>    
		          </tr>
              
              </tbody>
            </table>

                 
                      
                      
                  
    )
  }
}


module.exports = Summary;