import React from "react";

export default function(props) {
  const { orderDetail } = props.orderInformation;
  return (
    <div>
      <h1 className={"section-title"}>Payment details</h1>
      <div>
        <div>
          <div className="inner-container">
            <div className="left-column">
              <p> Customer Name</p>
            </div>
            <div className="right-column">
              <p>{orderDetail.customerName}</p>
            </div>
            <div className="clear"></div>
            <hr />
            <p className="line-break"></p>
          </div>
        </div>
        <div>
          <div className="inner-container">
            <div className="left-column">
              <p>Timestamp</p>
            </div>
            <div className="right-column">
              <p>{orderDetail.order_time}</p>
            </div>
            <div className="clear"></div>
            <hr />
            <p className="line-break"></p>
          </div>
        </div>
        <div>
          <div className="inner-container">
            <div className="left-column">
              <p>Order ID</p>
            </div>
            <div className="right-column">
              <p>{orderDetail.id}</p>
            </div>
            <div className="clear"></div>
            <hr />
            <p className="line-break"></p>
          </div>
        </div>
        <div>
          <div className="inner-container">
            <div className="left-column">
              <p>Service provider</p>
            </div>
            <div className="right-column">
              <p>fooddelivery@project</p>
            </div>
            <div className="clear"></div>
            <hr />
            <p className="line-break"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
