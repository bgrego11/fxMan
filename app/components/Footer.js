// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Footer extends React.Component {
  render() {
    return (
<footer>
  <div id="contact">
        <div id="bottom"><a href="https://github.com/bgrego11/fxman" target="_blank">Created with React</a>
          <p className="made-by-me">Steven Snyder | Ben Gregory © 2018</p>
        </div>
      </div>
</footer>

    )
  }
};

// Export the component back for use in other files
module.exports = Footer;
