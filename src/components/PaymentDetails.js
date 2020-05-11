import React from "react";

export default function(props) {
  const { orderDetail } = props.orderInformation;
  return (
    <div>
      <h1>Payment details</h1>
      <div>
        <div>
          <p> Customer Name</p>
          <p>{orderDetail.customerName}</p>
        </div>
        <div>
          <p>Timestamp</p>
          <p>{orderDetail.order_time}</p>
        </div>
        <div>
          <p>Order ID</p>
          <p>{orderDetail.id}</p>
        </div>
        <div>
          <p>Service provider</p>
          <p>fooddelivery@project</p>
        </div>
      </div>
    </div>
  );
}
