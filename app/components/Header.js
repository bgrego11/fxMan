// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({
  logout: function(evt) {
        sessionStorage.id ='';
        window.location='#/login'
  },
  render: function() {
    return (
      <nav className="navbar navbar-inverse">
    <ul className="nav navbar-nav col-sm-12 col-md-6-offset-3 col-lg-6-offset-3">
        <li className="active">
            {!sessionStorage.id ? (
            <a href="#/login">Login</a>
            ) : (
            <a href="" onClick={this.logout}>Logout</a>
            )
            }
        </li>
        <li>
            <a href="#/hub">Home</a>
        </li>
        <li>
            <a href="#/portfolio">Portfolio</a>
        </li>
                <li>
            <a href="#/articles">Latest News</a>
        </li>'

    </ul>
</nav>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
