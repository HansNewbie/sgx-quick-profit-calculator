import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import { setBuyPrice, setBudget, setQuantity, setMinProfit } from "../redux/actions";
import NumberFormat from 'react-number-format';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const inputTypeEnum = {
  BUY_PRICE: 'buyPrice',
  QUANTITY: 'quantity',
  BUDGET: 'budget',
  MIN_PROFIT: 'minProfit'
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    minWidth: 275,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const PrettyNumberFormat = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
    />
  );
}

PrettyNumberFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

class Input extends Component {
  handleChange = inputType => event => {
    const inputValue = event.target.value;
    switch (inputType) {
      case inputTypeEnum.BUY_PRICE:
        this.props.setBuyPrice(inputValue);
        break;
      case inputTypeEnum.QUANTITY:
        this.props.setQuantity(inputValue);
        break;
      case inputTypeEnum.BUDGET:
        this.props.setBudget(inputValue);
        break;
      case inputTypeEnum.MIN_PROFIT:
        this.props.setMinProfit(inputValue);
        break;
    }

    this.setState({ [inputType]: inputValue });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="buying-price"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Buying Price"
            value={this.props.buyPrice}
            onChange={this.handleChange(inputTypeEnum.BUY_PRICE)}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              inputComponent: PrettyNumberFormat
            }}
          />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="Quantity"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="No. of Shares"
                value={this.props.quantity}
                onChange={this.handleChange(inputTypeEnum.QUANTITY)}
                InputProps={{
                  inputComponent: PrettyNumberFormat
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="budget"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Budget"
                value={this.props.budget}
                disabled
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  inputComponent: PrettyNumberFormat
                }}
              />
            </Grid>
          </Grid>
          <TextField
            id="minProfit"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Min. Profit"
            value={this.props.minProfit}
            onChange={this.handleChange(inputTypeEnum.MIN_PROFIT)}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              inputComponent: PrettyNumberFormat
            }}
          />
        </CardContent>
      </Card>
    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    buyPrice: state.buyPrice,
    budget: state.budget,
    quantity: state.quantity,
    minProfit: state.minProfit
  }
}

export default connect(
  mapStateToProps,
  { setBuyPrice, setBudget, setQuantity, setMinProfit }
)(withStyles(styles)(Input));
