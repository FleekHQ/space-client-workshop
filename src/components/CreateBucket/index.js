/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Card from '../Card';

import client from '../../client';
import { getBucketObject } from '../../helpers';

const CreateBucket = (props) => {
  const [bucket, setBucket] = useState('');
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');

    try {
      console.log('creating bucket...');
      const res = await client.createBucket({ slug: bucket });
      const bucketObj = res.getBucket();

      console.log(getBucketObject(bucketObj));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card id="1" title="Create a new bucket">
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
          Create Bucket
        </Button>
      </form>
    </Card>
  );
};

export default CreateBucket;
