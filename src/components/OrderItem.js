import React from "react";

class OrderItem extends React.Component {
  render() {
      const {order, orderId} = this.props;
    return <div>
        <p>{order.customerName}</p>
        <p>{orderId}</p>
        <button> View Order </button>
        <button> delete Order </button>
    </div>;
  }
}

export default OrderItem