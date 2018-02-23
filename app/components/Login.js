// Include React
var React = require("react");
var axios = require("axios");
import PropTypes from 'prop-types';

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Login extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    user: '',
    password: '',
  };
this.updateUser = this.updateUser.bind(this)
this.updatePw = this.updatePw.bind(this)
this.login = this.login.bind(this)
}
  render() {
    
    return (
    <div className= "row">
     <div className="col-sm-4">
     </div>
     <div className="col-sm-4">
               <div ref="login" id="logincomp">
               {!sessionStorage.id &&
                <form action="" id="logDiv" method="POST" className="panel panel-dark animated bounceInLeft" role="form">
              <legend>Login</legend>

              <div className="panel-body form-group">
                  <label >User Name</label>
                  <input value={this.state.user} onChange={this.updateUser} type="text" className="form-control" id="b" placeholder="jill123" />
                  <label >Password</label>
                  <input value={this.state.password} onChange={this.updatePw} type="Password" className="form-control" id="a" placeholder="****" />
              </div>
              <button id="logBtn" onClick={this.login} className="btn btn-success">Login</button>
              <br></br>
              <div><h2>Don't Have a login yet?</h2>
              </div>
              <button id="createBtn" onClick={this.next} className="btn btn-success">Create New</button>
              </form>
              }
          </div>
          </div>
          <div className= "col-sm-4">
          </div>
      </div>

    );
  }
  updateUser(e) {
    this.setState({
      user: e.target.value
    });
  }
  updatePw(e) {
    this.setState({
      password: e.target.value
    });
  }
  login(e) {
    e.preventDefault();
   var data = this.state;
   var self = this;
    axios.post("/user/login",data).then(function(res) {
      sessionStorage.setItem("id", res.data._id)
      window.location.href = '/#/hub';
    })
  }
  next(e) {
    e.preventDefault();
    window.location.href = '/#/create';

  }


};

// Export the component back for use in other files
module.exports = Login;