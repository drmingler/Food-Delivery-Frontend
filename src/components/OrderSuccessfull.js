import React from "react";
import {Link} from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function OrderSucessfull() {
  return (
    <div>
      <div className="image">
          <img src={require('/Users/mac/Documents/React/food-delivery/src/images/ordersuccess.jpg')} />
      </div>
      <div className="success-container">
        <div className="success">
          <h1>Order successful</h1>
          <hr />
          <p>
            Your Order has been placed and will be delivered to the registered
            delivery address.
          </p>
          <p>Thank You for using our services</p>
        </div>
      </div>
        <div className={"goHome"}>
            <Link to={"/"}>
                <Button>Go Home</Button>
            </Link>
        </div>
    </div>
  );
}
