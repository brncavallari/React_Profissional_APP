import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 6
    },
    title: {
        paddingBottom: theme.spacing.unit * 6
    }
});


const DashBoardMenu = ({ children, classes, title }) => (
    <Paper className={classes.root}>
        <Typography variant="h4" align="center" className={classes.title}>
            {title}
        </Typography>
        {children}</Paper>
);

export default withStyles(styles)(DashBoardMenu);