import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

export interface StyleProps {
    root: BaseCSSProperties,
}

export type PropsClasses = Record<keyof StyleProps, string>;

export default makeStyles<Theme, StyleProps>((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2),
    },
}));

