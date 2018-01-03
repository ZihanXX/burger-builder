import React from 'react';
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';


const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
    {controls.map(ctrl=> (
      <BuildControl
        key={ctrl.label} label={ctrl.label}
        clickLess={() => props.clickLess(ctrl.type)}
        clickMore={() => props.clickMore(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchasing}
    >ORDER NOW</button>
  </div>
);


export default buildControls;