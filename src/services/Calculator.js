/* Rules
 * =====
 * - GST on brokerage fee, clearing fee and SGX trading fee (excluding share price)
 * - Brokerage fee, clearing fee, SGX trading fee is round up to 2 decimal (always round up)
 */
import store from '../redux/store';

let configState = {
  brokerageFeeRate: null,
  minBrokerageFee: null,
  clearingFeeRate: null,
  maximumClearingFee: null,
  accessFeeRate: null,
  gst: null
}

export const configStateListener = (state) => {
  const { brokerageFeeRate, minBrokerageFee, clearingFeeRate, maximumClearingFee, accessFeeRate, gst} = state;
  configState = {
    brokerageFeeRate: brokerageFeeRate,
    minBrokerageFee: minBrokerageFee,
    clearingFeeRate: clearingFeeRate,
    maximumClearingFee: maximumClearingFee,
    accessFeeRate: accessFeeRate,
    gst: gst
  }
}

export const getBudget = (buyingPrice, quantity,
    brokerageFeeRate = configState.brokerageFeeRate,
    minBrokerageFee = configState.minBrokerageFee,
    clearingFeeRate = configState.clearingFeeRate,
    maximumClearingFee = configState.maximumClearingFee,
    accessFeeRate = configState.accessFeeRate,
    gst = configState.gst) => {
  const proceeds = buyingPrice * quantity;
  const brokerageFee = roundUpTo2Decimal(Math.max(proceeds * brokerageFeeRate, minBrokerageFee));
  const clearingFee = roundUpTo2Decimal(Math.min(proceeds * clearingFeeRate, maximumClearingFee));
  const accessFee = roundUpTo2Decimal(proceeds * accessFeeRate);
  const gstAmount = roundUpTo2Decimal(gst * (brokerageFee + clearingFee + accessFee));

  return roundUpTo2Decimal(proceeds + brokerageFee + clearingFee + accessFee + gstAmount);
}

export const getQuantity = (buyingPrice, budget, rounding = 100,
    brokerageFeeRate = configState.brokerageFeeRate,
    minBrokerageFee = configState.minBrokerageFee,
    clearingFeeRate = configState.clearingFeeRate,
    maximumClearingFee = configState.maximumClearingFee,
    accessFeeRate = configState.accessFeeRate,
    gst = configState.gst) => {
  return null;
}

const roundUpTo2Decimal = (value) => {
  return Math.ceil(value * 100) / 100;
}