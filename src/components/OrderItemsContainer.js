import React from "react";
import { connect } from "react-redux";
import OrderItem from "./OrderItem";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";

class OrderContainer extends React.Component {
  render() {
    const { orders } = this.props;
    return (
      <div className={"order-item-container"}>
        <div className={"header"}>
          <h1>LIST OF ORDER</h1>
        </div>
        <ul className={"item-list-mainpage"}>
            <div className={"create-order"}>
                <Link to={"/create"}>
                    <Button>Create Order</Button>
                </Link>
            </div>
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
