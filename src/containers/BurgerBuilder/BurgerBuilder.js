import React, {Component} from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuilderControls/BuildControls';


const INGRIDIENTS_PRICE = 
{
    salad: .25,
    bacon: .5,
    cheese: .3,
    meat: 1.5,
}

class BurgerBuilder extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            ingridients:{
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice : 4
        }
    }

    addIngridientHandler= (type) => {
        //debugger;
        let newIngridients = {
            ...this.state.ingridients
        }
        newIngridients[type]++;
        let subTotal = this.state.totalPrice + INGRIDIENTS_PRICE[type];
        this.setState({ingridients:newIngridients, totalPrice:subTotal});
    }

    removeIngridientHandler = (type) => {
        let newIngridients = {
            ...this.state.ingridients
        }
        if (newIngridients[type] !== 0) newIngridients[type]--;
        let subTotal = this.state.totalPrice - INGRIDIENTS_PRICE[type];
        this.setState({ingridients:newIngridients, totalPrice:subTotal});
    }

    render() {
        debugger;
        let disabledInfo = {
            ...this.state.ingridients
        }

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxiliary>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                    addIngridient={this.addIngridientHandler} 
                    removeIngridient={this.removeIngridientHandler} 
                    disable={disabledInfo}
                    totalPrice={this.state.totalPrice.toFixed(2)}/>
            </Auxiliary>
        );
    }
} 

export default BurgerBuilder;

