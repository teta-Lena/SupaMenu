import React, { Component, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...otherprops }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const checkTokenValidity = () => {
    if (!token || token == null) {
      navigate("/login");
    }
  };
  useEffect(() => {
    checkTokenValidity();
  }, [navigate]);
  return (
    <Fragment>
      <Component {...otherprops} />
    </Fragment>
  );
};

export default ProtectedRoute;
