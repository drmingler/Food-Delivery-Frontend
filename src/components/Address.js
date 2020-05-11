import React from "react";

export default function(props) {
  const { orderDetail } = props.orderInformation;
  return (
    <div>
      <h1>Delivery Address details</h1>
      <div>
        <div>
          <div>
            <p>Street</p>
            <p>{orderDetail.street}</p>
          </div>
          <div>
            <p> Postal Code</p>
            <p>{orderDetail.postal_code}</p>
          </div>
          <div>
            <p>City</p>
            <p>{orderDetail.city}</p>
          </div>
          <div>
            <p>Service provider</p>
            <p>fooddelivery@project</p>
          </div>
        </div>
      </div>
    </div>
  );
}
