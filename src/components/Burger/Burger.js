import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
      // console.log([...Array(props.ingredients[igKey])]);
      // if `salad: 2`, then the array is: [undefined, undefined]
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // console.log(igKey);
        // console.log(i);
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
    });

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}


export default burger;