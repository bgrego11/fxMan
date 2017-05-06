// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Nav = React.createClass({

 render: function() {
     
   return (

     <div>
         <h1>What would you like to do?</h1>
     
       <div className="images">

     <img src="" alt="Currency Calculator" className="img-circ">
   </img>
     <img src="" alt="Current Trades" className="img-circe">
   </img>
     <img src="" alt="Current Currency News" className="img-crcle">
   </img>
     <img src="" alt="Foreign Exchange rate charts/trends" className="img-square">
   </img>
   </div>
   </div>
     )

 }
});

module.exports = Nav;