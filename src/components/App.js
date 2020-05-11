import React,{Fragment} from "react";
import { connect } from "react-redux";
import { handleGetOrders } from "../actions/orders";
import OrderContainer from "./OrderItemsContainer";
import  OrderDetails from "./OrderDetails"
import { handleGetFoods } from "../actions/foods";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetFoods());
    this.props.dispatch(handleGetOrders());
    // this.props.dispatch(handleCreateOrder({
    //   user_name: "Sharon",
    //   first_name: "Wine",
    //   last_name: "Dassah",
    //   phone_number: "+234706443",
    //   street: "Arkad ut",
    //   postal_code: "7694",
    //     foods: [2, 1]
    // }));
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
