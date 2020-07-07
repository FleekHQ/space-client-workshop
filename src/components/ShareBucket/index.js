/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Card from '../Card';

import client from '../../client';

const ShareBucket = (props) => {
  const [bucket, setBucket] = useState('');
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');

    try {
      console.log('sharing bucket...');
      const res = await client.shareBucket({ bucket });
      const threadInfo = res.getThreadinfo();

      console.log({
        bucket,
        key: threadInfo.getKey(),
        addressList: threadInfo.getAddressesList(),
        addresses: threadInfo.getAddressesList().join(', '),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card id="6" title="Share bucket">
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

        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Share Bucket
        </Button>
      </form>
    </Card>
  );
};

export default ShareBucket;
