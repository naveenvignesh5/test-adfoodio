import React from 'react';

import Container from '@material-ui/core/Container';

import { Navbar } from '../../components';

import useStyles, { StyleProps, PropsClasses } from './Menu.style';

export default function Menu(): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Navbar />
      Menu Page
    </Container>
  );
}
