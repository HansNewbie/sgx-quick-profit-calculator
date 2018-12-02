import {SET_BUYPRICE, SET_BUDGET, SET_QUANTITY, SET_MINPROFIT} from './actionTypes';

const initialState = {
  buyPrice: null,
  budget: null,
  quantity: null,
  minProfit: null,
  calculatedSellingPrice: null
};


export default function(state = initialState, action) {
  switch (action.type) {
    case SET_BUYPRICE:
      const { buyPrice } = action.payload;
      return {
        ...state,
        buyPrice: buyPrice
      }
    case SET_BUDGET:
      const { budget } = action.payload;
      return {
        ...state,
        budget: budget
      }
    case SET_QUANTITY:
      const { quantity } = action.payload;
      return {
        ...state,
        quantity: quantity
      }
    case SET_MINPROFIT:
      const { minProfit } = action.payload;
      return {
        ...state,
        minProfit: minProfit
      }
    default:
      return state;
  }
}