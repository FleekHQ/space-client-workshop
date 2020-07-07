/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Card = ({ children, id, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.number}>{id}</div>
      <div className={classes.content}>
        <Typography variant="h6" className={classes.title}>{title}</Typography>
        {children}
      </div>
    </div>
  );
};

export default Card;
