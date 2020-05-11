import React from "react";

export default function(props) {
  const { orderDetail, ordered, total } = props.orderInformation;
  return (
    <div>
      <h1>Order Summary</h1>
      <div>
        <div>
          <p>Date</p>
          <p>{orderDetail.order_date}</p>
        </div>
      </div>

      <h1>Items Summary</h1>
      {ordered.map(items => (
        <ul key={items.id}>
          <li key={items.id + 1}>{items.food_id}</li>
          <li key={items.id + 2}>{items.quantity}</li>
          <li key={items.id + 3}>{`$${items.price}`}</li>
        </ul>
      ))}
      <div>
        <h1>Total sum </h1>
        <span>{`$${total}`}</span>
      </div>
    </div>
  );
}
