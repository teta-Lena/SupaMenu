import React from "react";

const RegisterPage = () => {
  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="title-container">
          <p>
            Supa<span className="sp-login">Menu</span>
          </p>
        </div>
        <div className="input-container-register">
          <h5>Signup</h5>
          <form className="form-data">
          <div className="field">
              <div>First name</div>
              <input type="text " placeholder="Enter your email" />
            </div>
            <div className="field">
              <div>Last name</div>
              <input type="text " placeholder="Enter your email" />
            </div>
            <div className="field">
              <div>Phone number</div>
              <input type="text " placeholder="Enter your email" />
            </div>
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
            Already have an account? <span> Login</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
