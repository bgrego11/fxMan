// Include React
var React = require("react");
var axios = require("axios");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Login  = React.createClass({
  getInitialState: function() {
    return {
      user: '',
      password: '',
    };
  },
  render: function() {
    
    return (
    
               <div ref="login" id="login">
               {!sessionStorage.id &&
                <form action="" id="logDiv" method="POST" className="panel panel-default animated bounceInLeft" role="form">
              <legend>Login</legend>

              <div className="panel-body form-group">
                  <label for="">User Name</label>
                  <input value={this.state.user} onChange={this.updateUser} type="text" className="form-control" id="" placeholder="jill123" />
                  <label for="">Password</label>
                  <input value={this.state.password} onChange={this.updatePw} type="Password" className="form-control" id="" placeholder="****" />
              </div>
              <button id="logBtn" onClick={this.login} className="btn btn-success">Login</button>
              <br></br>
              <div><h2>Don't Have a login yet?</h2>
              </div>
              <button id="logBtn" onClick={this.next} className="btn btn-success">Create new User</button>
              </form>
              }
          </div>
      
   



    );
  },
  updateUser: function(evt) {
    this.setState({
      user: evt.target.value
    });
  },
  updatePw: function(evt) {
    this.setState({
      password: evt.target.value
    });
  },
  login: function(e) {
    e.preventDefault();
   var data = this.state;
   console.log(data);
   var self = this;
    axios.post("/user/login",data).then(function(res) {
      console.log(res.data);
      sessionStorage.setItem("id", res.data._id)
      window.location.href = '/#/hub';
      console.log(sessionStorage);
    })
  },
  next: function(e) {
    e.preventDefault();
    window.location.href = '/#/create';

  }


});

// Export the component back for use in other files
module.exports = Login;