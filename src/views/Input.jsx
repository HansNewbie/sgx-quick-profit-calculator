import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

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

class Input extends Component {
  state = {
    buyingPrice: '',
    budget: '',
    quantity: '',
    minProfit: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
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
            value={this.state.buyingPrice}
            onChange={this.handleChange('buyingPrice')}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="Quantity"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Quantity"
                value={this.state.quantity}
                onChange={this.handleChange('quantity')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="budget"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Budget"
                value={this.state.budget}
                onChange={this.handleChange('budget')}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
          <TextField
            id="minProfit"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Min. Profit"
            value={this.state.minProfit}
            onChange={this.handleChange('minProfit')}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
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

export default withStyles(styles)(Input);
