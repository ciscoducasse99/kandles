import React from "react";
import {Link, useHistory} from "react-router-dom"
import {connect} from 'react-redux'
import "../css/App.css"

const Cart = ({cart}) => {
  const history = useHistory();
  return (
    <> 
    <div className="container">
      <div className="p-3 mb-3 d-flex flex-row justify-content-between align-items-center">
        <h6>Order</h6>
        <i className="text-secondary fa fa-times fa-lg pointer" aria-hidden="true" onClick={()=>history.goBack()}/>
      </div>

    {cart.length === 0 ? <div>Empty cart</div>:
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Candle</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <th scope="row">

              <p>{item.name}</p>
                <img
                  src={item.image}
                  style={{ height: "75px", width: "75px" }}
                  alt={item.name}
                />
              </th>

              <td>{item.price}</td>
              <td>
                {/* <div className="btn-group">
                  <button type="button" className="btn btn-secondary px-3">
                    -
                  </button>
                  <button type="button" className="btn btn-secondary px-3">
                    +
                  </button>
                </div> */}

                <div class="input-group">
          <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                  <span>-</span>
              </button>
          </span>
          <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="10"/>
          <span class="input-group-btn">
              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                  <span>+</span>
              </button>
          </span>
      </div>
                <button className="btn btn-danger mt-1">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/cart/checkout">
        <button className="mb-3 col-12 col-md-6 col-lg-3 btn btn-primary">Proceed to checkout</button>
      </Link>
      </div>
}
    </div>

    </> 
  );
};

const mapStateToProps = state =>({
  cart:state.products.cart
})

export default connect(mapStateToProps, null)(Cart);
