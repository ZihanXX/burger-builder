import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


// This could be a functional component
class OrderSummary extends Component {

  componentWillUpdate() {
    console.log("OrderSummary will update.");
  }

  render() {
    const
    ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
          {this.props.ingredients[igKey]}</li>
      });

    return(
      <Aux>
      <h3>Your Order:</h3>
      <p>Delicious burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout? </p>
      <Button onClick={this.props.purchaseCanceled} btnType='Danger'>CANCEL</Button>
      <Button onClick={this.props.purchaseContinue} btnType='Success'>CONTINUE</Button>
      </Aux>
    );
  }
}


export default OrderSummary;