import React from "react";

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="title-container">
          <p>
            Supa<span className="sp-login">Menu</span>
          </p>
        </div>
        <div className="input-container">
          <h5>Welcome</h5>
          <p className="login-title">Login to SupaMenu</p>
          <h6>Enter the email and password below</h6>
          <form className="form-data">
            <div className="field">
              <div>EMAIL</div>
              <input type="text " placeholder="Enter your email" />
            </div>
            <div className="field">
              <label>PASSWORD </label>
              <input
                className="form-field"
                type="text"
                placeholder="Enter your password"
              />
            </div>
            <div className="field">
              <input type="submit" value="Log in" className="loginsubmit" />
            </div>
          </form>
          <p className="form-options">
            Dont' have an account? <span>Sign up</span>
          </p>
          <p className="form-options">
            Forgot your password/login <span>RESET</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
