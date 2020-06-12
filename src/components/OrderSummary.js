import React from "react";

export default function(props) {
  const { orderDetail, ordered, total } = props.orderInformation;
  return (
    // Link will be here
    <div className="inner-container">
      <h1 className={"section-title"}>Order Summary</h1>
      <div>
        <div className="inner-container">
          <div className="left-column">
            <p>Date</p>
          </div>
          <div className="right-column">
            <p>{orderDetail.order_date}</p>
          </div>
          <div className="clear"></div>
          <hr />
          <p className="line-break"></p>
        </div>
      </div>
      <div className="inner-container">
        <h1 className={"section-title"} >Items Summary</h1>
        <ul className={"item-list"}>
          {ordered.map(items => (
            <li key={items.id}>
              <p className="left-column">{items.food_id}</p>
              <p className="right-column"> {`$${items.price}`}</p>
              <p className="right-column"> {items.quantity}</p>
              <div className="clear"></div>
              <hr />
            </li>
          ))}
        </ul>
        <h2 className={"total-container-total"}>Total</h2>
        <div className={"total-container"}>
          <h2>{`$${total}`}</h2>
        </div>
        <div className="clear"></div>
        <hr />
      </div>
        <p className="line-break"></p>
    </div>
  );
}
