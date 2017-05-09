var React = require("react");
var axios = require("axios");
var moment = require("moment");





// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Trader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyAmt: '',
      buyCcy: 'GBP',
      sellAmt: '',
      tradeDate: moment().format("MM-DD-YY"),
      status: 'open',
      profit: '',
      client: sessionStorage.id
    };

    this.updateAmt = this.updateAmt.bind(this);
    this.setCcy = this.setCcy.bind(this); 
    this.reval = this.reval.bind(this); // Here we render the function
    this.book = this.book.bind(this);

}
  updateAmt(evt) {
      this.setState({
        buyAmt: evt.target.value
      })
      console.log(this.state)
  }
  setCcy(evt) {
    this.setState({
      buyCcy: evt.target.value
    })
  }
  book(evt) {
    evt.preventDefault();
    if (this.state.sellAmt !== '') {
      var data = this.state;
      axios.post("/book/trade",data).then(function(res) {
              console.log(res);
                 
          })
    } else {
      alert("you have not valued the trade")
    }
    

    }
    
  reval(evt) {
    evt.preventDefault();
    
        var buy = "USD";
        var sell = this.state.buyCcy;
        var amt = this.state.buyAmt;
        var self = this;

        var data = {
          amt: amt,
          sell: sell,
          buy: buy
        }
            axios.post("/new/trade",data).then(function(res) {
              var sellAmt = res.data;
              self.setState({
                sellAmt: sellAmt.toFixed(2)
              }) 
              console.log(self.state);   
          })
  }
  render() {

    return (
     
        <div className="well col-lg-10 col-sm-11 col-md-10">

        <div className="form-group row">
            <label for="sel1">Select Currency to Purchase:</label>
            <select value={this.state.buyCcy} onChange={this.setCcy} className="form-control" id="sel1">
                <option value="GBP">GBP</option>
                <option value="AED">AED</option>
                <option value="AFN">AFN</option>
                <option value="AUD">AUD</option>
                <option value="BRL">BRL</option>
                <option value="BYR">BYR</option>
                <option value="BZD">BZD</option>
                <option value="CAD">CAD</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="DKK">DKK</option>
                <option value="HKD">HKD</option>
                <option value="KRW">KRW</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="PHP">PHP</option>
                <option value="RUB">RUB</option>
                <option value="SEK">SEK</option>
                <option value="TRY">TRY</option>
                <option value="EUR" >EUR</option>
                <option value="JPY">JPY</option>
                <option value="CHF">CHF</option>
            </select>
        </div>
        
            <label for="sel1">Amount</label>
            <input className="form-control" type="number" value={this.state.buyAmt} onChange={this.updateAmt} id="buyAmt"/>
          
          <div className="col-sm-12 col-md-10 col-lg-10 well">
            <label for="sell">Current Value</label>
            <div className="well"><span className="glyphicon glyphicon-usd"></span>{this.state.sellAmt}</div>
          </div>
        
        <div className="row">
          <div className="col-sm-12 col-lg-10 col-md-10">
            <button className="btn btn-default" onClick={this.reval} >Value My Trade</button>
            <button className="btn btn-danger" onClick={this.book} >Book My Trade</button>
          </div>
        
        </div>
       
        
        
        
        </div>
        

   
    )
  }
}

// Export the component back for use in other files
module.exports = Trader;