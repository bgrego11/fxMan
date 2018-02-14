// Include React
var React = require("react");


class Header extends React.Component {
  logout(evt) {
        sessionStorage.id ='';
        window.location='#/login'
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">ForexApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
            {!sessionStorage.id ? (
            <a className="nav-link" href="#/login">Login</a>
            ) : (
            <a className="nav-link" href="" onClick={this.logout}>Logout</a>
            )
            }
        </li>
      <li className="nav-item">
        <a className="nav-link" href="#/hub">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/articles">Latest News</a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

// Export the component back for use in other files
module.exports = Header;
