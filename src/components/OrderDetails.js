import React from "react";
import { connect } from "react-redux";
import { getOrderInfo } from "../utils/helper";
import OrderSummary from "./OrderSummary";
import AdditionalDetails from "./AdditionalDetails";
import PaymentDetails from "./PaymentDetails";
import Address from "./Address";

class OrderDetail extends React.Component {
  render() {
    const { orders, id } = this.props;
    const orderInformation = getOrderInfo(orders, id);
    return (
      <div>
        {orderInformation && (
          <div>
            <OrderSummary orderInformation={orderInformation} />
            <AdditionalDetails orderInformation={orderInformation} />
            <PaymentDetails orderInformation={orderInformation} />
            <Address orderInformation={orderInformation} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ orders }, props) {
  const { id } = props.match.params;
  return {
    orders,
    id
  };
}

export default connect(mapStateToProps)(OrderDetail);
