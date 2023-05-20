import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Code to submit signup form
  };

  return (
    <div>
      <div className="navbar-container">
        <h1 className="logo">eventify.</h1>
      </div>
      <form className="form2" onSubmit={handleSignupSubmit}>
        <label className="mail2" htmlFor="signup-email">
          Email:
        </label>
        <input
          className="mail2-input"
          type="email"
          id="signup-email"
          name="signup-email"
          value={signupEmail}
          onChange={(event) => setSignupEmail(event.target.value)}
          required
        />
        <br />
        <br />

        <label className="pass2" htmlFor="signup-password">
          Password:
        </label>
        <input
          className="pass2-input"
          type="password"
          id="signup-password"
          name="signup-password"
          value={signupPassword}
          onChange={(event) => setSignupPassword(event.target.value)}
          required
        />
        <br />
        <br />

        <label className="confirm-pass" htmlFor="confirm-password">
          Confirm Password:
        </label>
        <input
          className="confirm-pass-input"
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <br />
        <br />
        <Link to="/main">
          <input className="submit-button" type="submit" value="Sign Up" />
        </Link>
      </form>
    </div>
  );
}

export default SignupPage;