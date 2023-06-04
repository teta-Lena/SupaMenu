import React from "react";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="top-header">
          <div className="user">
            <p>Jacques Kagabo</p>
          </div>
          <div className="title">
            <h2>
              Supa<span>Menu</span>
            </h2>
          </div>
        </div>
        <div className="menu-header">
          <p className="menu-header-p">Register your restaurant on SupaMenu</p>
          <p className="sub-menu-header">for free and get more revenue</p>
          <div className="options-btns">
            <button>Register your restaurant</button>
            <button> Restaurant already registered? Sign in </button>
          </div>
        </div>
      </div>

      <div className="options">
        <p className="options-p">How it works</p>
        <div className="boxes">
          <div className="box-step">
            <h4>Step 1</h4>
            <p>Register your restaurant</p>
          </div>
          <div className="box-step">
            <h4>Step 2</h4>
            <p>Create your restaurant profile and create menu items</p>
          </div>
          <div className="box-step">
            <h4>Step 3</h4>
            <p>Start receiving orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
