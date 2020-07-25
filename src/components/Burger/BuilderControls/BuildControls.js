import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuilderControls/BuildControl/BuildControl'



const controls = [
    { label:'Salad', type:'salad' },
    { label:'Bacon', type:'bacon' },
    { label:'Cheese', type:'cheese' },
    { label:'Meat', type:'meat' },

];

const buildControls = (props) => {
    
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.totalPrice}</strong></p>
            {controls.map(item => {
                return (
                        <BuildControl 
                            key={item.type} 
                            Label={item.label}
                            added={() => props.addIngridient(item.type)}
                            removed={() => props.removeIngridient(item.type)}
                            disabled={props.disable[item.type]} 
                        />
)   
            })}
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.showSummary}>Order Now</button>
        </div>
    );
};

export default buildControls;