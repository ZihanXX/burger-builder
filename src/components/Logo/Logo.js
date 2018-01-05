import React from 'react';
import brugerLogo from '../../assets/imgs/burger-logo.png';
import styles from './Logo.css';


const logo = (props) => (
  <div className={styles.Logo}>
    <img src={brugerLogo} alt='' />
  </div>
);


export default logo;