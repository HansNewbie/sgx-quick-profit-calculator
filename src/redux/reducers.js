import {SET_BUYPRICE, SET_BUDGET, SET_QUANTITY, SET_MINPROFIT} from './actionTypes';
import {getBudget, getSellingPrice} from '../services/Calculator';

const initialState = {
  buyPrice: null,
  budget: null,
  quantity: null,
  minProfit: null,
  calculatedSellingPrice: null,

  // Config
  brokerageFeeRate: 0.00275,
  minBrokerageFee: 25,
  clearingFeeRate: 0.000325,
  maximumClearingFee: 600,
  accessFeeRate: 0.000075,
  gst: 0.07
};


export default function(state = initialState, action) {
  let endState = {...state};

  switch (action.type) {
    case SET_BUYPRICE:
      const buyPriceInput = parseFloat(action.payload.buyPriceInput);

      endState.buyPrice = buyPriceInput;
      break;
    case SET_QUANTITY:
      const quantityInput = parseFloat(action.payload.quantityInput);
      const calculatedBudget = getBudget(state.buyPrice, quantityInput);

      endState.quantity = quantityInput;
      endState.budget = calculatedBudget;
      break;
    // case SET_BUDGET:
    //   const budgetInput = parseFloat(action.payload.budgetInput);

    //   endState.budget = budgetInput;
    //   break;
    case SET_MINPROFIT:
      const minProfitInput = parseFloat(action.payload.minProfitInput);
      endState.minProfit = minProfitInput;
      break;
  }

  const calculatedSellingPrice = getSellingPrice(endState.quantity, endState.budget, endState.minProfit);
  endState.calculatedSellingPrice = calculatedSellingPrice;
  return endState;
}