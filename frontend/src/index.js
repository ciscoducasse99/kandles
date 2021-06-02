import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import { Provider } from "react-redux";

import { Route, BrowserRouter, Switch } from "react-router-dom";

class DynamicImport extends Component {
  state = {
    component: null
  };

  componentDidMount() {
    this.props.load().then(mod => {
      this.setState(() => ({
        component: mod.default
      }))
    });
  }

  render() {
    return this.props.children(this.state.component);
  }
}

const Home = props =>(
  <DynamicImport load={()=> import("./pages/App.js")}>
    {Component =>
      Component === null ? (
        <div className="d-flex h-100 justify-content-center">
          <div className="spinner-grow text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Component {...props} />
      )
    }
  </DynamicImport>
)

const Product = props =>(
  <DynamicImport load={()=> import("./pages/Product.js")}>
    {Component =>
      Component === null ? (
        <div className="d-flex h-100">
          <div className="spinner-grow text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Component {...props}/>
      )
    }
  </DynamicImport>
)

const Admin = props =>(
  <DynamicImport load={()=> import("./pages/Admin.js")}>
    {Component =>
      Component === null ? (
        <div className="d-flex h-100">
          <div className="spinner-grow text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Component {...props}/>
      )
    }
  </DynamicImport>
)

const Cart = props =>(
  <DynamicImport load={()=> import("./pages/Cart.js")}>
    {Component =>
      Component === null ? (
        <div className="d-flex h-100">
          <div className="spinner-grow text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Component {...props}/>
      )
    }
  </DynamicImport>
)
const Checkout = props =>(
  <DynamicImport load={()=> import("./pages/Checkout.js")}>
    {Component =>
      Component === null ? (
        <div className="d-flex h-100">
          <div className="spinner-grow text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Component {...props}/>
      )
    }
  </DynamicImport>
)

const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:candleId" render={props => <Product {...props} />}/>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/cart/checkout" component={Checkout}/>
        {/* <Route exact path="/users/:customer_id/confirm-location" component={ConfirmLocation}/>
        <Route
          exact
          path="/users/:customer_id"
          render={props => <User {...props} />}
        />
        <Route component={NoMatchPage} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
