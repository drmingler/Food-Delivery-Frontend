import React,{Fragment} from "react";
import { connect } from "react-redux";
import { handleGetOrders } from "../actions/orders";
import OrderContainer from "./OrderItemsContainer";
import  OrderDetails from "./OrderDetails"
import { handleGetFoods } from "../actions/foods";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateOrder from "./CreateOrder";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetFoods());
    this.props.dispatch(handleGetOrders());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className="App">
            <div>
              <Route path ='/' exact component = {OrderContainer}/>
              <Route path ='/orderdetails/:id' exact component = {OrderDetails}/>
              <Route path ='/create' exact component = {CreateOrder}/>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ loading }) {
  return { loading };
}
export default connect(mapStateToProps)(App);
