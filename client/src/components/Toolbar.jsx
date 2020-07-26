import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/styles';

const Toolbar = () => {
    const useStyles = makeStyles({
        root: {
            background: 'black',
            color: 'white',
            paddingBottom: '0.001em',
            paddingTop: '0.001em',
            textAlign: 'center',
            lineHeight: '.25em',
            // position: 'fixed',
            top: 0,
            width: '100%',
        }
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 >Todd's Garage Doors</h2>
            <h3>Installation & Repair</h3>
        </div>
    )
};

export default Toolbar;