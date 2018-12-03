import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Output extends Component {
  render() {
    return (
      <Card>
        <CardContent>
        Selling price: {this.props.calculatedSellingPrice}
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculatedSellingPrice: state.calculatedSellingPrice
  }
}

export default connect(mapStateToProps)(Output);
