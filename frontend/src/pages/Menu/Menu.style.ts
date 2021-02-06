import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

export interface StyleProps {
    root: BaseCSSProperties,
}

export type PropsClasses = Record<keyof StyleProps, string>;

const baseStyle: StyleProps = {
    root: {}
};

export default makeStyles<Theme, StyleProps>(() => baseStyle as any);

