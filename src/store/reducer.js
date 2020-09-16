import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES =    {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.8
};

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.ADD_INGREDIENT){
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        }
    }else if(action.type === actionTypes.REMOVE_INGREDIENT){
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        }
    }else if(action.type === 'REDIRECT_AFTER_ORDER'){
        return{
           ...state,
           ingredients: {
               ...state.ingredients,
               salad: 0,
               bacon: 0,
               cheese: 0,
               meat: 0
           },
           totalPrice: 4
        }
    }else{
        return state;
    }
};

export default reducer;

