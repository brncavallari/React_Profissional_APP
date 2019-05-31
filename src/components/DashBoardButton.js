import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";

class DashBoardButton extends React.Component {
    state = {
        valor: ''
    }

    render() {
        const { children, to } = this.props;

        return (
            <Button
                component={Link}
                to={to}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth
            >
                {children}
            </Button>
        );
    }
};

export default DashBoardButton;