import {SET_BUYPRICE, SET_BUDGET, SET_QUANTITY, SET_MINPROFIT} from './actionTypes';
import {getBudget} from '../services/Calculator';

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
  switch (action.type) {
    case SET_BUYPRICE:
      const { buyPriceInput } = action.payload;
      return {
        ...state,
        buyPrice: buyPriceInput
      }
    case SET_BUDGET:
      const { budgetInput } = action.payload;
      return {
        ...state,
        budget: budgetInput
      }
    case SET_QUANTITY:
      const { quantityInput } = action.payload;
      const calculatedBudget = getBudget(state.buyPrice, quantityInput);

      return {
        ...state,
        quantity: quantityInput,
        budget: calculatedBudget
      }
    case SET_MINPROFIT:
      const { minProfitInput } = action.payload;
      return {
        ...state,
        minProfit: minProfitInput
      }
    default:
      return state;
  }
}