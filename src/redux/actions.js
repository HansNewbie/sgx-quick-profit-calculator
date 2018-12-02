import {SET_BUYPRICE, SET_BUDGET, SET_QUANTITY, SET_MINPROFIT} from './actionTypes';

export const setBuyPrice = buyPrice => ({
    type: SET_BUYPRICE,
    payload: {buyPrice}
});

export const setBudget = budget => ({
    type: SET_BUDGET,
    payload: {budget}
});

export const setQuantity = quantity => ({
    type: SET_QUANTITY,
    payload: {quantity}
});

export const setMinProfit = minProfit => ({
    type: SET_MINPROFIT,
    payload: {minProfit}
});