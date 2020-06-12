import React from "react";

export default function(props) {
  const { orderDetail } = props.orderInformation;
  return (
    <div>
      <h1  className={"section-title"} >Additional Information</h1>
      <div>
        <div>
          <div className="inner-container">
            <div className="left-column">
              <p>Order Type</p>
            </div>
            <div className="right-column">
              <p>Delivery</p>
            </div>
            <div className="clear"></div>
            <hr />
            <p className="line-break"></p>
          </div>
          <div>
            <div className="inner-container">
              <div className="left-column">
                <p>My Comment</p>
              </div>
              <div className="right-column">
                <p>(No comment)</p>
              </div>
              <div className="clear"></div>
              <hr />
              <p className="line-break"></p>
            </div>
          </div>
          <div>
            <div className="inner-container">
              <div className="left-column">
                <p>Phone Number</p>
              </div>
              <div className="right-column">
                <p>{orderDetail.phone_number}</p>
              </div>
              <div className="clear"></div>
              <hr />
              <p className="line-break"></p>
            </div>
          </div>
          <div>
            <div className="inner-container">
              <div className="left-column">
                <p>Order status</p>
              </div>
              <div className="right-column">
                <p>Delivered</p>
              </div>
              <div className="clear"></div>
              <hr />
              <p className="line-break"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
