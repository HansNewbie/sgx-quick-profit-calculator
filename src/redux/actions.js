import {SET_BUYPRICE, SET_BUDGET, SET_QUANTITY, SET_MINPROFIT} from './actionTypes';

export const setBuyPrice = buyPriceInput => ({
    type: SET_BUYPRICE,
    payload: {buyPriceInput}
});

export const setBudget = budgetInput => ({
    type: SET_BUDGET,
    payload: {budgetInput}
});

export const setQuantity = quantityInput => ({
    type: SET_QUANTITY,
    payload: {quantityInput}
});

export const setMinProfit = minProfitInput => ({
    type: SET_MINPROFIT,
    payload: {minProfitInput}
});