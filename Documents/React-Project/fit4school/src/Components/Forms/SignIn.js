import React, { Component } from "react";
import axios from "axios";

class SignIn extends Component {
  el = document.createElement("div");
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  showAlert = e => {
    e.preventDefault();
    const { username } = this.state;
    axios
      .post("http://localhost:8080/reactPost", { username })
      .then(res => {
        sessionStorage.setItem("response", JSON.stringify(res.data));
        console.log(this.props.history);
        this.props.history.push(`/about/${username}`);
      })
      .catch(err => sessionStorage.setItem("error", err));
  };

  render() {
    return (
      <div className="signin-popu">
        <button className="x-mark" onClick={this.props.onClose}>
          x
        </button>
        <form onSubmit={this.showAlert}>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.username}
            name="username"
            placeholder="Username"
          ></input>
          <br></br>
          <input
            type="password"
            onChange={this.changeHandler}
            value={this.state.password}
            name="password"
            placeholder="Password"
          ></input>
          <br></br>
          <button type="submit" className="signin-submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
