import React from 'react';
import MUCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const width = "160px";
const height = "280px";

const styles = {
    root: {
        width,
        height,
        margin: "12px",
        cursor: "pointer",
        float: "left",
    },
    flipper: {
        transition: "0.6s",
        transformStyle: "preserve-3d",
        position: "relative"
    },
    flipperRotate: {
        transform: "rotateY(180deg)"
    },
    page: {
        width,
        height,
        position: "absolute",
        top: 0,
        left: 0,
        backfaceVisibility: "hidden"
    },
    pageFront: {
        backgroundColor: "silver",
        transform: "rotateY(0deg)",
        zIndex: 2
    },
    pageBack: {
        backgroundColor: "purple",
        transform: "rotateY(180deg)"
    }
};

const Card = ({ name, classes, isActive, onclick }) => (
    <div role="presentation" className={classes.root} onClick={onclick}>
        <div className={classNames(classes.flipper, {
            [classes.flipperRotate]: isActive
        })}>
            <MUCard className={classNames(classes.page, classes.pageFront)}>
            </MUCard>
            <MUCard className={classNames(classes.page, classes.pageBack)}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                </CardContent>
            </MUCard>
        </div>
    </div>
);

export default withStyles(styles)(Card);