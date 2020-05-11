import React from "react";
import { connect } from "react-redux";
import OrderItem from "./OrderItem";
import { handleGetFoods } from "../actions/foods";
import { handleGetOrders } from "../actions/orders";

class OrderContainer extends React.Component {
  render() {
    const { orders } = this.props;
    return (
      <div>
        <ul>
          {orders.map(eachOrder => (
            <li key={eachOrder.id}>
              <OrderItem order={eachOrder.orderDetail} orderId={eachOrder.id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}
export default connect(mapStateToProps)(OrderContainer);
