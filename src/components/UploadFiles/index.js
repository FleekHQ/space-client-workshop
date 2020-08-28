/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Card from '../Card';

import client from '../../client';

const UploadFiles = (props) => {
  const [bucket, setBucket] = useState('');
  const [path, sethPath] = useState('');
  const [targetPath, setTargetPath] = useState('');

  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    try {
      console.log('uploading files...');

      const uploadStream = client.addItems({
        bucket,
        targetPath,
        sourcePaths: [ path ],
      })

      uploadStream.on('data', (data) => {
        const itemResult = data.getResult();

        console.log(itemResult.getSourcepath());
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card id="4" title="Upload files to the bucket">
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
          label="File Path"
          variant="outlined"
          value={path}
          size="small"
          onChange={(e) => {
            sethPath(e.target.value);
          }}
        />

        <TextField
          label="Bucket Path"
          variant="outlined"
          value={targetPath}
          size="small"
          onChange={(e) => {
            setTargetPath(e.target.value);
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Upload Files
        </Button>
      </form>
    </Card>
  );
};

export default UploadFiles;
