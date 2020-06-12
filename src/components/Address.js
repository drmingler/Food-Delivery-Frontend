import React from "react";

export default function(props) {
  const { orderDetail } = props.orderInformation;
  return (
    <div>
      <h1 className={"section-title"}>Delivery Address details</h1>
      <div>
        <div>
          <div>
            <div className="inner-container">
              <div className="left-column">
                <p>Street</p>
              </div>
              <div className="right-column">
                <p>{orderDetail.street}</p>
              </div>
              <div className="clear"></div>
              <hr />
              <p className="line-break"></p>
            </div>
          </div>
          <div>
            <div className="inner-container">
              <div className="left-column">
                <p> Postal Code</p>
              </div>
              <div className="right-column">
                <p>{orderDetail.postal_code}</p>
              </div>
              <div className="clear"></div>
              <hr />
              <p className="line-break"></p>
            </div>
          </div>
          <div>
            <div className="inner-container">
              <div className="left-column">
                <p>City</p>
              </div>
              <div className="right-column">
                <p>{orderDetail.city}</p>
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
              <p className="line-break"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
