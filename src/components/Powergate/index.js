/* eslint-disable */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createPow } from "@textile/powergate-client"

import useStyles from './styles';
import Card from '../Card';

// import client from '../../client';

const host = "http://0.0.0.0:6002" // or whatever powergate instance you want

const pow = createPow({ host })

const JoinBucket = (props) => {
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');
    try {
      const { status } = await pow.health.check();
      console.log('status...', status);
    } catch(e) {
      console.error(e);
    }
  };

  return (
    <Card id="8" title="powergate">
      <form onSubmit={onSubmit} className={classes.root}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Powergate
        </Button>
      </form>
    </Card>
  );
};

export default JoinBucket;
