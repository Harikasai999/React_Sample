import React from "react";
import "./index.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" ,password:""};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit() {
    console.log("emai@@@@l: " + this.state.email+" PAssword "+this.state.password);
    alert("emai@@@@l: " + this.state.email+" PAssword "+this.state.password);
  }

  render() {
    return (
      <div>

        {/* <div class="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar">
           </div> */}
        <div className="Heading">
          <b >Login</b>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="email"><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter Email"             
              required 
              value={this.state.email}
              onChange={this.handleChangeEmail} />

            <label for="psw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"              
              required 
              value={this.state.password}
              onChange={this.handleChangePassword}/>
            <div className="ButtonContainer">
              <button className="Button" type="submit" value="Submit">Login</button>
            </div>
          </div>

          {/* <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                  </div> */}
        </form>
      </div>
    );
  }
}

export default Login;
