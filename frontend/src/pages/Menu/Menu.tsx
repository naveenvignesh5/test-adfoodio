import React from 'react';

import Container from '@material-ui/core/Container';

import useStyles, { StyleProps, PropsClasses } from './Menu.style';

export default function Menu(): JSX.Element {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Container className={classes.root} maxWidth="lg">
      Menu Page
    </Container>
  );
}
