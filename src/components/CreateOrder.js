import React from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { foodDropDown, calculateTotal } from "../utils/helper";
import { connect } from "react-redux";
import serializeForm from "form-serialize";
import { handleCreateOrder } from "../actions/orders";
import { Redirect } from "react-router-dom";

class CreateOrder extends React.Component {
  state = {
    totalPrice: 0,
    selectedFood: []
  };
  handleSelectFood = (e, data) => {
    e.preventDefault();

    // Get All the foods from the redux store
    const { foods } = this.props;

    // Calculate the price for a selected food item
    const total = calculateTotal(data.value, foods);

    this.setState(() => ({
      totalPrice: total,
      selectedFood: data.value
    }));
    //return <Redirect to="/" />;
  };

  handleSubmitOrder = e => {
    const { selectedFood } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    const newOrder = serializeForm(e.target, { hash: true });
    const orderToBeDispatched = {
      ...newOrder,
      foods: selectedFood
    };
    dispatch(handleCreateOrder(orderToBeDispatched));

    return Object.keys(orderToBeDispatched).length === 7
      ? this.props.history.push("/success")
      : null;
  };

  render() {
    const { foods } = this.props;
    const { totalPrice } = this.state;
    const foodItems = foodDropDown(foods);
    return (
      <div className={"CreateOrderForm"}>
        <div className="outside-container">
          <Form onSubmit={this.handleSubmitOrder}>
            <Form.Field required>
              <label>User Name</label>
              <input placeholder="User Name" name={"user_name"} />
            </Form.Field>
            <Form.Field required>
              <label>First Name</label>
              <input placeholder="First Name" name={"first_name"} />
            </Form.Field>
            <Form.Field required>
              <label>Last Name</label>
              <input placeholder="Last Name" name={"last_name"} />
            </Form.Field>
            <Form.Field required>
              <label>Phone Number</label>
              <input placeholder="Phone Number" name={"phone_number"} />
            </Form.Field>
            <Form.Field required>
              <label>Street</label>
              <input placeholder="Street" name={"street"} />
            </Form.Field>
            <Form.Field required>
              <label>Postal Code</label>
              <input placeholder="Postal Code" name={"postal_code"} />
            </Form.Field>
            <div className={"total-price-create"}>
              <h2 className={"total-container-total"}> Total Price :</h2>
              <div className={"total-container"}>
                <h1>{`$${totalPrice}`}</h1>
              </div>
            </div>
            <Dropdown
              placeholder="Foods"
              fluid
              name={"foods"}
              multiple
              selection
              required
              onChange={this.handleSelectFood}
              options={foodItems}
            />
            <Button type="submit">Place Order</Button>
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ foods }) {
  return { foods };
}
export default connect(mapStateToProps)(CreateOrder);
