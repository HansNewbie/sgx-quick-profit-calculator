import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import TopBar from './views/TopBar';
import Input from './views/Input';
import Output from './views/Output';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <TopBar />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Input />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Output />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
