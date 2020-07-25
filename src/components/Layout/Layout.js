import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/ToolBar/Toolbar';

const layout = (props) => (
    <Auxiliary>
    <Toolbar/>
        <div>
            Tolbar, SideDrawer Backdrop
        </div>
        <main className={classes.Content}>
            { props.children }
        </main>
    </Auxiliary>
);

export default layout;