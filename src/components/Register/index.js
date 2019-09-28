import React from "react";
import "./index.css";
import { withRouter } from "react-router-dom";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      firstname: "",
      lastname: "",
      mobile: ""
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  handleChangeFirstname = event => {
    this.setState({ firstname: event.target.value });
  };
  handleChangeLastname = event => {
    this.setState({ lastname: event.target.value });
  };
  handleChangeMobile = event => {
    this.setState({ mobile: event.target.value });
  };
  handleSubmit() {
    console.log(
      "emai@@@@l: " + this.state.email + " PAssword " + this.state.password
    );
    alert(
      "emai@@@@l: " + this.state.email + " PAssword " + this.state.password
    );
  }

  render() {
    return (
      <div>
        {/* <div class="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" class="avatar">
           </div> */}
        <div className="Heading">
          <b>Register</b>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="firstname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              value={this.state.firstname}
              onChange={this.handleChangeFirstname}
            />
            <label for="lastname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              value={this.state.lastname}
              onChange={this.handleChangeLastname}
            />
            <label for="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              required
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              required
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <label for="psw">
              <b>Password</b>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              required
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            <label for="mobile">
              <b>Mobile</b>
            </label>

            <input
              type="text"
              placeholder="Enter Mobile Number"
              required
              value={this.state.mobile}
              onChange={this.handleChangeMobile}
            />
            <label for="psw">
              <b>Gender</b>
            </label>
            <div>
              <select className="custom-select">
                <option value="grapefruit">Male</option>
                <option value="lime">Female</option>
              </select>
            </div>
            <div className="ButtonContainer">
              <button
                className="Button"
                type="submit"
                value="Submit"
                onClick={() => this.props.history.push("/Login")}
              >
                Register
              </button>
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

export default withRouter(Register);
