// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Nav = React.createClass({

  render: function() {
  
  	const divStyle = {
  margin: 10
};


    return (

      <div>
  		<h2>What would you like to do?</h2>
  	
    	<div className="images">

  	<img src="../css/images/calculator.png" alt="Currency Calculator"  width="200" height="200" className="img-rounded" style={divStyle}>
    </img>
  	<img src="../css/images/currency.jpg" alt="Current Trades"  width="200" height="200" className="img-rounded" style={divStyle}>
    </img>
  	<br></br>
    <img src="../css/images/news.jpg" alt="Current Currency News"  width="200" height="200" className="img-rounded" style={divStyle}>
    </img>
  	<img src="../css/images/forex.jpg" alt="Foreign Exchange rate charts/trends"  width="200" height="200" className="img-rounded" style={divStyle}>
    </img>
    </div>
    </div>
  	)

  }
});

module.exports = Nav;


// set up create user, add button an function for route and page to create 