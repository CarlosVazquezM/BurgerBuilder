import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const FunctionName = (props) => {
    let ingridientSummary = Object.keys(props.ingridients)
    .map(igKey => {
            return (<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingridients[igKey]}
            </li>);
    });  
 
    return(
            <Auxiliary>
                <h3>Your order</h3>
                <p>A delcious burger with the following elements</p>
                
                <ul>
                    {ingridientSummary}
                </ul>

                <p><strong>Total Price : {props.totalPrice}</strong></p>
                <p>Continue to checkout?</p>
                <Button clicked={props.purchaseCanceled} btnType="Danger" >Cancel</Button>
                <Button clicked={props.purchaseContinued} btnType="Success">Continue</Button> 
            </Auxiliary>
        );
};

export default FunctionName;