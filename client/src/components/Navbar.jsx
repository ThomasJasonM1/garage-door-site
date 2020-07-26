import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import bgImage from '../images/house.jpg';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    tabs: {
        flexGrow: 1,
    }
});

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const href = window.location.pathname;
        switch (href) {
            case '/service':
                return setValue(1);
            case '/new-doors':
                return setValue(2);
            case '/about':
                return setValue(3);
            default:
                return setValue(0);
        }
    });

    return (
        <>
        {/* <h1 className={classes.root}>Todd's Garage Door Installation & Repair</h1> */}
        <Paper className={classes.tabs}>
            
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Home" to="/home" component={Link} />
                <Tab label="Service" to="/service" component={Link} />
                <Tab label="New Doors" to="/new-doors" component={Link} />
                <Tab label="About Us" to="/about" component={Link} />
            </Tabs>
        </Paper>
        </>
    );
}