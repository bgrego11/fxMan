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
      id: sessionStorage.id,
      report: "pfc",
      data: [
            {
                key: "Amount Purchased by Currency",
                values: [
                // {label: "5-3-17", value: 1.1},
                // {label: "5-4-17", value: 3},
                // {label: "5-5-17", value: 5}
                ]
            }],
      type: "bar"

    };
    this.setReportType = this.setReportType.bind(this); 
      
    // this.reval = this.reval.bind(this); // Here we render the function
  }
   setReportType(evt) {
    this.setState({
      report: evt.target.value
    });
    
    var self = this;
    self.state.data[0].values = []
    axios.post("/chart", self.state).then(function(res) {
             console.log(res.data); 
             var trades = res.data;
             for (var i in trades) {
               self.state.data[0].values.push({label: trades[i]._id, value: trades[i].amount})
             }
             self.setState({
               data: self.state.data
             });
          })
    
  }
  componentDidMount() {
        var self = this;
        axios.post("/chart", this.state).then(function(res) {
             console.log(res.data); 
             var trades = res.data;
             for (var i in trades) {
               self.state.data[0].values.push({label: trades[i]._id, value: trades[i].amount})
             }
             self.setState(self.state);
             console.log(self.state);
          })
  }
  


  
  render() {

return(
<div>
  <form>
<div className="form-row">
<div className="col">
            <label for="sel1">Select Currency to Chart:</label>
            <select value={this.state.report} onChange={this.setReportType} className="form-control" id="sel1">
                <option value="pfc">Number of Trades by Currency</option>
                <option value="tbc">Purchase Amount by Currency</option>
            </select>
            </div>
        </div>
        </form>
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