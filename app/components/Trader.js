var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Trader extends React.Component {
  constructor(props) {
    super(props);
  // Here we render the function
  }
  render() {

    return (
     
        <div className="well col-lg-10 col-sm-11 col-md-10">

        <div className="form-group row">
            <label for="sel1">Select Currency to Purchase:</label>
            <select className="form-control" id="sel1">
                <option>GBP</option>
                <option>EUR</option>
                <option>JPY</option>
                <option>CHF</option>
            </select>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <label for="sel1">Amount</label>
            <input className="form-control" type="number" id="buyAmt"/>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-10">
            <label className="well" for="sell">Current Value
            </label>
            
          </div>
        </div>
       
        
        
        
        </div>
        

   
    )
  }
}

// Export the component back for use in other files
module.exports = Trader;