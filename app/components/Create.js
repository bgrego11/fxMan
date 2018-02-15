// Include React
var React = require("react");
var axios = require("axios");
import PropTypes from 'prop-types';
// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
class Create extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      user: '',
      password: '',
      email: ''
    }
  }

  render() {
    return (
    
        <div className= "row">
     <div className="col-sm-4">
     </div>
     <div className="col-sm-4">
      <div ref="login" id="log">
      <form action="" id="logDiv" method="POST" className="panel panel-default animated bounceInLeft" role="form">
    <legend>Login</legend>

    <div className="panel-body form-group">
        <label>User Name</label>
        <input value={this.state.user} onChange={this.updateUser} type="text" className="form-control" placeholder="jill123" />
         <label for="">Email</label>
        <input value={this.state.email} onChange={this.updateEmail} type="text" className="form-control" />
        <label>Password</label>
        <input value={this.state.password} onChange={this.updatePw} type="Password" className="form-control" placeholder="****" />
    </div>
    <button id="logBtn" onClick={this.create} className="btn btn-success">Create</button>
    </form>
</div>
</div>
     <div className="col-sm-4">
     </div>
     </div>




    );
  }
  updateUser(evt) {
    this.setState({
      user: evt.target.value
    });
  }
  updatePw(evt) {
    this.setState({
      password: evt.target.value
    });
  }
  updateEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }
  create(e) {
    e.preventDefault();
   var data = this.state;
   var self = this;
    axios.post("/user/create",data).then(function(res) {
      console.log(res.data);
      sessionStorage.setItem("id", res.data._id)
      window.location.href = '/#/hub';
      console.log(sessionStorage);
    })
  }

}

// Export the component back for use in other files
module.exports = Create;