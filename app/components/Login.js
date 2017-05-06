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
      email: ''
    };
  },
  render: function() {
    return (
    
      <div ref="login" id="login">
      <form action="" id="logDiv" method="POST" className="panel panel-default animated bounceInLeft" role="form">
    <legend>Login</legend>

    <div className="panel-body form-group">
        <label for="">User Name</label>
        <input value={this.state.user} onChange={this.updateUser} type="text" className="form-control" id="" placeholder="jill123" />
         <label for="">Email</label>
        <input value={this.state.email} onChange={this.updateEmail} type="text" className="form-control" id="" />
        <label for="">Password</label>
        <input value={this.state.password} onChange={this.updatePw} type="Password" className="form-control" id="" placeholder="****" />
    </div>
    <button id="logBtn" onClick={this.login} className="btn btn-success">Login</button>
    <button id="logBtn" onClick={this.create} className="btn btn-success">Create</button>
    </form>
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
  updateEmail: function(evt) {
    this.setState({
      email: evt.target.value
    });
  },
  create: function(e) {
    e.preventDefault();
   var data = this.state;
   var self = this;
    axios.post("/user/create",data).then(function(res) {
      console.log(res);
  
    })
  }

});

// Export the component back for use in other files
module.exports = Login;