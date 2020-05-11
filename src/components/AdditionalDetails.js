import React from "react";

export default function(props) {
  const { orderDetail } = props.orderInformation;
  return (
    <div>
      <h1>Additional Information</h1>
      <div>
        <div>
          <div>
            <p>Order Type</p>
            <p>orderDetail.order_date}</p>
          </div>
          <div>
            <p>My Comment</p>
            <p>(No comment)</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{orderDetail.phone_number}</p>
          </div>
          <div>
            <p>Order status</p>
            <p>Delivered</p>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
