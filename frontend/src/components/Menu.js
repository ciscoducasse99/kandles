import React from "react";
import Div100vh from "react-div-100vh";
import "../css/App.css";

const Menu = ({ handleClose }) => {
  console.log(handleClose)
  return (
    <Div100vh className="menu-component d-flex align-items-center">
        <div className="container">
      <div className="text-center">
        <h3 >About</h3>
        <h3 >Updates</h3>
        <h3 >Orders</h3>
        <small>(Unactive for now)</small>
      </div>
      <nav className="navbar navbar-light d-flex fixed-bottom mb-1 flex-row">
        <small
          className="pointer mr-auto font-weight-bold"
          onClick={handleClose}
        >CLOSE</small>
        <div className="ml-auto">
          <i className="fa fa-facebook " aria-hidden="true"></i>
          <i className="fa fa-instagram mx-3" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </nav>
      </div>
    </Div100vh>
  );
};

export default Menu;
