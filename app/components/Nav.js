// Include React
var React = require("react");


class Nav extends React.Component {

  render() {
  



    return (  
      <div>
      <div className="well text-align-center">
      <h1>What would you like to do?</h1>
      </div>

<div className= "row">
     <div className="col-sm-1">
     </div>
    <div className="well col-sm-3" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
    	<div className="images">
      <div><h3>Forex Calulator</h3>
  	<a href="#/new"><img src="../css/images/calculator.png" alt="Currency Calculator"  width="250" height="250" className="img-rounded">
    </img></a>
    </div>
    </div>
    </div>
        <div className="well col-sm-3" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
    <div><h3>My Portfolio</h3>
  	<a href="#/portfolio"><img src="../css/images/currency.jpg" alt="Current Trades"  width="250" height="250" className="img-rounded">
    </img></a>
    </div>
    </div>
    <div className="well col-sm-3" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
    <div><h3>Todays News</h3>
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
}

module.exports = Nav
