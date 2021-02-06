import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

export interface StyleProps {
  root: BaseCSSProperties;
  menuButton: BaseCSSProperties;
  title: BaseCSSProperties;
}

export type PropsClasses = Record<keyof StyleProps, string>;

export default makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);
