import React, {Component} from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuilderControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'


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
            totalPrice : 4,
            purchasable: false,
            purchasing: false,
        }
    }

    updatePurchaseState = () => {
        const ingridients = {
            ...this.state.ingridients
        };
        const sum = Object.keys(ingridients).map(igKey => {
            return ingridients[igKey];
        }).reduce((sum,el) => {
            return sum + el;    
        },0);
        this.setState({purchasable: sum > 0 })
    }

    addIngridientHandler= (type) => {
        //debugger;
        let newIngridients = {
            ...this.state.ingridients
        }
        newIngridients[type]++;
        let subTotal = this.state.totalPrice + INGRIDIENTS_PRICE[type];
        this.setState({ingridients:newIngridients, totalPrice:subTotal},this.updatePurchaseState);
        
    }

    removeIngridientHandler = (type) => {
        let newIngridients = {
            ...this.state.ingridients
        }
        if (newIngridients[type] !== 0) newIngridients[type]--;
        let subTotal = this.state.totalPrice - INGRIDIENTS_PRICE[type];
        this.setState({ingridients:newIngridients, totalPrice:subTotal},this.updatePurchaseState);
        
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
        alert('Continue');
    }

    render() {
        //debugger;
        let disabledInfo = {
            ...this.state.ingridients
        }

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingridients={this.state.ingridients} 
                        purchaseCanceled={this.purchaseCancelHandler} 
                        purchaseContinued={this.purchaseContinueHandler}
                        totalPrice={this.state.totalPrice.toFixed(2)}
                        />
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                    addIngridient={this.addIngridientHandler} 
                    removeIngridient={this.removeIngridientHandler} 
                    disable={disabledInfo}
                    purchasable={this.state.purchasable}
                    showSummary={this.purchaseHandler}
                    totalPrice={this.state.totalPrice.toFixed(2)}
                />           
                </Auxiliary>
        );
    }
} 

export default BurgerBuilder;

