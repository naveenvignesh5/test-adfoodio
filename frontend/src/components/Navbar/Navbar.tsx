import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles, { PropsClasses, StyleProps } from './Navbar.style';

export default function ButtonAppBar(): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            ABC Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
