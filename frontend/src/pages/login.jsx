import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Code to submit login form
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Code to submit signup form
  };

  return (
    <div>
      <div className="navbar-container">
        <h1 className="logo">eventify.</h1>
      </div>

      <form className="form1" onSubmit={handleLoginSubmit}>
        <label className="mail1" htmlFor="email">
          Email:
        </label>
        <input
          className="mail1-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <br />

        <label className="pass1" htmlFor="password">
          Password:
        </label>
        <input
          className="pass1-input"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <br />
        <Link to="/create">
          <input className="login-button" type="submit" value="Login" />
        </Link>
      </form>
      <div>
        <h3 className="or">Don't have an account?</h3>
        <a href="./signup" className="signup">
          Sign up
        </a>
      </div>
    </div>
  );
}

export default LoginPage;