import React from 'react'
import Input from '@material-ui/core/Input'
import Label from '@material-ui/core/FormLabel'
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux";

const styles = theme => ({
    root: {
        bottom: "10px",
        type: "text",
    }
});


const DashBoardInput = ({ children, classes, onChangeInput }) => (
    <Label> Informe a quantidade de CARDS:
        <Input className={classes.root}
            onChange={(e) => {
                onChangeInput(e.target.value);
            }}
        >
            {children}
        </Input>
    </Label>
);


const mapDispatchToProps = dispatch => ({
    onChangeInput: value => {
        dispatch({ type: "TAKE_VALUE", value });
    }
});

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(DashBoardInput));