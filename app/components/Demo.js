var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Promo extends React.Component {
  constructor(props) {
    super(props);
  // Here we render the function
  }
  render() {

    return (
     
        <div className="demo animated bounceInLeft">
            <div className="panel panel-default">
                <div className="panel-heading">
                    Demo Head 1
                </div>
                <div className="panel-body">
                    <ul>
                        <li><a href="#/point1">some demo</a></li>
                        <li><a href="#">nothing</a></li>
                    </ul>
                    <p>Here is some descriptive stuff we may put after. We will have to see how it looks</p>
                </div>
            </div>
        </div>
        

   
    )
  }
}

// Export the component back for use in other files
module.exports = Promo;