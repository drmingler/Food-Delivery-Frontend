import React from "react";
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {handleDeleteOrder} from "../actions/orders";
class OrderItem extends React.Component {

  handleViewOrderDetails = e => {
    e.preventDefault();
    const { orderId } = this.props;
    this.props.history.push(`/orderdetails/${orderId}`);
  };
  handleOrderDelete = e => {
    const { dispatch, orderId } = this.props;
    e.preventDefault();
    dispatch(handleDeleteOrder(orderId));


  };

  render() {
    const { order, orderId } = this.props;
    return (
      <div>
        <p>{order.customerName}</p>
        <p>{orderId}</p>
        <button onClick={this.handleViewOrderDetails}> View Order </button>
        <button onClick={this.handleOrderDelete}> delete Order </button>
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default withRouter(connect(mapStateToProps)(OrderItem));
