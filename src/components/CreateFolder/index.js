/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Card from '../Card';

import client from '../../client';

const CreateFolder = (props) => {
  const [bucket, setBucket] = useState('');
  const [path, sethPath] = useState('');

  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');

    try {
      console.log('creating folder...');
      await client.createFolder({ bucket, path });
      console.log('folder created!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card id="2" title="Create folder inside the bucket">
      <form onSubmit={onSubmit} className={classes.root}>
        <TextField
          label="Bucket"
          variant="outlined"
          value={bucket}
          size="small"
          onChange={(e) => {
            setBucket(e.target.value);
          }}
        />

        <TextField
          label="Path"
          variant="outlined"
          value={path}
          size="small"
          onChange={(e) => {
            sethPath(e.target.value);
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Create Folder
        </Button>
      </form>
    </Card>
  );
};

export default CreateFolder;
