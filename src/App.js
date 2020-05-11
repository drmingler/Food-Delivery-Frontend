import React from "react";
import { connect } from "react-redux";
import { handleGetOrders } from "./actions/orders";

import { handleGetFoods } from "./actions/foods";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetFoods());
    this.props.dispatch(handleGetOrders());
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}
function mapStateToProps({ loading }) {
  return { loading };
}
export default connect(mapStateToProps)(App);
