import React, { useState } from "react";
import Menu from "../components/Menu";
import "../css/App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Div100vh from 'react-div-100vh'

const Layout = (props) => {
  const [main, setMain] = useState(true);
  const [menu, setMenu] = useState(false);

  return (
    <>
      { main && (
        <Div100vh className="container d-flex justify-content-center align-items-center text-dark">
          <nav className="fixed-top navbar navbar-light">
            <h5>
              <Link to="/" className="navbar-brand">
                Kandles
              </Link>
            </h5>
            
            <div className="ml-auto">
              <Link to="/cart">
                <i className="dark-link fa" style={{ fontSize: "24px" }}>
                  &#xf07a;
                </i>
                <span className={props.cart.length == 0 ? 'badge badge-secondary' : 'badge badge-primary'} id="lblCartCount">
                  {props.cart.length}
                </span>
              </Link>
            </div>
          </nav>
          <React.Fragment>{props.component}</React.Fragment>
          <nav className="navbar navbar-light d-flex fixed-bottom mb-1 flex-row">
            <div className="mr-auto">
              <small className="pointer font-weight-bold" onClick={() => setMenu(true)}>
                MENU
              </small>
            </div>
            <div>
              <i className="fa fa-facebook " aria-hidden="true"></i>
              <i className="fa fa-instagram mx-3" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </nav>
        </Div100vh>
      )}
      <CSSTransition
        in={menu}
        timeout={300}
        classNames="menu"
        onEnter={() => setMain(false)}
        onExited={() => setMain(true)}
        unmountOnExit
      >
        <Menu handleClose={()=>setMenu(false)} />
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.products.cart,
});

export default connect(mapStateToProps, null)(Layout);
