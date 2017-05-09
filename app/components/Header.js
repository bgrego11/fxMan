// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse">
    <a className="navbar-brand" href="#/new">Trade Now</a>
    <ul className="nav navbar-nav">
        <li className="active">
            <a href="#/login">Login</a>
        </li>
        <li>
            <a href="#/hub">Home</a>
        </li>
        <li>
            <a href="#/portfolio">Portfolio</a>
        </li>'
    </ul>
</nav>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
