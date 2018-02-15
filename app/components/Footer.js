// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Footer extends React.Component {
  render() {
    return (
    <footer>
        <p><a href="#">Created by</a> Benjamin Gregory and Steven Snyder.</p>
    </footer>
    )
  }
};

// Export the component back for use in other files
module.exports = Footer;
