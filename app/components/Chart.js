var React = require("react");
var axios = require("axios");
var moment = require("moment");

const C3Chart = require("./C3Chart.js");


// Create the Header component
// Notice how the header uses React.createclassName
// Notice how it uses a render function which specifies what will be displayed by the component
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ccy: "EUR",
      data: [
            {
                key: "RATES",
                values: [
                {label: "5-3-17", value: 1.1},
                {label: "5-4-17", value: 3},
                {label: "5-5-17", value: 5}
                ]
            }],
      type: "line"

    };
    this.setCcy = this.setCcy.bind(this); 
      
    // this.reval = this.reval.bind(this); // Here we render the function
  }
   setCcy(evt) {
    this.setState({
      ccy: evt.target.value
    })
  }
  componentDidMount() {
        axios.get("/rates/"+this.state.ccy).then(function(res) {
             console.log(res.data) ; 
          })
  }
  


  
  render() {

return(
<div>
<div className="form-group row">
            <label for="sel1">Select Currency to Chart:</label>
            <select value={this.state.ccy} onChange={this.setCcy} className="form-control" id="sel1">
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
<C3Chart data={this.state.data} type={this.state.type} options={options}/>
 </div>                
                      
                      
)               
    
  }
}




let options = {
  padding: {
    top: 20,
    bottom: 20,
    left: 40,
    right: 10
  },
  size: {
    width: 800,
    height: 600
  },
  subchart: true,
  zoom: true,
  grid: {
    x: false,
    y: true
  },
  labels: true,
  axisLabel: {
    x: "Date",
    y: "Rate"
  },
  onClick: function(d) {
    let categories = this.categories(); //c3 function, get categorical labels
    console.log(d);
    console.log("you clicked {" + d.name + ": " + categories[d.x] + ": " + d.value + "}");
  }
};

module.exports = Chart;