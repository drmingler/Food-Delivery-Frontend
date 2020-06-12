import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleDeleteOrder } from "../actions/orders";
import {Button} from "semantic-ui-react";

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
    const { order } = this.props;
    return (
      <div className={"order-container"}>
        <h2 className="order-title">{order.customerName}</h2>
        <div className={"buttons-container"}>
          <button onClick={this.handleViewOrderDetails} className={"delete"}>
            View Order
          </button>
          <button onClick={this.handleOrderDelete} className={"details"}>
            Delete Order
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default withRouter(connect(mapStateToProps)(OrderItem));
