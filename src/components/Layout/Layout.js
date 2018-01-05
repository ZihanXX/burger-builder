import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />

      <div>Backdrop</div>

      <main className={styles.Content}>
        {props.children}
      </main>

    </Aux>
  );
}

export default layout;