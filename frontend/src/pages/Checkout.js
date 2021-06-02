import React from "react";

const Checkout = () => {
  return (
    <div className="container">
{/* 
      <i class="fa fa-angle-left" aria-hidden="true" onClick={()=>history.goBack()}/> */}
      <div className="mt-5">
        <h6>Payment method</h6>
        <div className="d-flex flex-row justify-content-around my-5">
        <div
          className="rounded-circle"
          style={{ backgroundColor: "#555", height: "80px", width: "80px" }}
        />
        <div
          className="rounded-circle"
          style={{ backgroundColor: "#555", height: "80px", width: "80px" }}
        />
        <div
          className="rounded-circle"
          style={{ backgroundColor: "#555", height: "80px", width: "80px" }}
        />
        <div
          className="rounded-circle"
          style={{ backgroundColor: "#555", height: "80px", width: "80px" }}
        />
      </div>
      </div>
    </div>
  );
};

export default Checkout;