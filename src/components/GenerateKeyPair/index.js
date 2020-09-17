import React from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Card from '../Card';

import client from '../../client';

const GenerateKeyPair = () => {
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');

    try {
      console.log('Generating keypair...');
      await client.generateKeyPairWithForce();

      console.log('key generated!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card id="0" title="Generate Key Pair">
      <form onSubmit={onSubmit} className={classes.root}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Generate Key Pair With Force
        </Button>
      </form>
    </Card>
  );
};

export default GenerateKeyPair;
