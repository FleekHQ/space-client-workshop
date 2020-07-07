/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Card from '../Card';

import client from '../../client';

const JoinBucket = (props) => {
  const [bucket, setBucket] = useState('');
  const [key, setKey] = useState('');
  const [addresses, setAddresses] = useState('');
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');

    const payload = {
      bucket,
      threadInfo: {
        key,
        addresses: addresses.replace(' ', '').split(','),
      },
    };

    console.log('payload', payload);

    try {
      console.log('sharing bucket...');
      const res = await client.joinBucket(payload);

      console.log('result', res.getResult());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card id="7" title="Join bucket">
      <form onSubmit={onSubmit} className={classes.root}>
        <TextField
          label="Bucket name"
          variant="outlined"
          value={bucket}
          size="small"
          onChange={(e) => {
            setBucket(e.target.value);
          }}
        />

        <TextField
          label="Key"
          variant="outlined"
          value={key}
          size="small"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />

        <TextField
          label="addresses"
          variant="outlined"
          value={addresses}
          size="small"
          placeholder="address1, address2, address3..."
          multiline
          onChange={(e) => {
            setAddresses(e.target.value);
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Join Bucket
        </Button>
      </form>
    </Card>
  );
};

export default JoinBucket;
