import React from "react";
import "../css/App.css";
import {Link} from 'react-router-dom';

const CandleListing = ({ candles }) => {
  return (
    <React.Fragment>
      {candles.map((item, i) => 
      
        <div key={i} className="col-6 mb-4 col-md-3 text-center candle-image">
          <Link to={`/product/${item.candleId}`}>
          <img src={item.image} alt={item.name} className="stock-image" />
          <h6 className="dark-link">{item.name}</h6>
      </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default CandleListing;
