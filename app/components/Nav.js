// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Nav = React.createClass({

  render: function() {
  



    return (  
      <div>
      <div className="text-align-center">
      <h1>What would you like to do?</h1>
      </div>

<div className= "row">
     <div className="col-sm-1">
     </div>
    <div className="well col-sm-3" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
    	<div className="images">
      <div><h2>Forex Calulator</h2>
  	<a href="#/new"><img src="../css/images/calculator.png" alt="Currency Calculator"  width="250" height="250" className="img-rounded">
    </img></a>
    </div>
    </div>
    </div>
        <div className="well col-sm-3" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
    <div><h2>Portfolio</h2>
  	<a href="#/portfolio"><img src="../css/images/currency.jpg" alt="Current Trades"  width="250" height="250" className="img-rounded">
    </img></a>
    </div>
    </div>
    <div className="well col-sm-3" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
    <div><h2>Forex Calulator</h2>
    <a href="#/articles"><img src="../css/images/news.jpg" alt="Current Currency News"  width="250" height="250" className="img-rounded">
    </img></a>
    </div>
    </div>
</div>
    <div className="col-sm-2">
    </div>
</div>


  	)

  }
});

module.exports = Nav;


// set up create user, add button an function for route and page to create 