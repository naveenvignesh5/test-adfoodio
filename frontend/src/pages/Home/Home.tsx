import React from 'react';

import Container from '@material-ui/core/Container';

import { Navbar } from '../../components';

import useStyles, { StyleProps, PropsClasses } from './Home.style';

export default function Home(): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <>
      <Navbar />
      <Container className={classes.root} maxWidth="lg">
        Menu Page
      </Container>
    </>
  );
}
