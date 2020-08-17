import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import jason from '../images/jason.jpg';

const EmployeeCard = () => {
    const useStyles = makeStyles(theme => ({
        employeeContainerStyles: {
            // background: '#d0d2dc'
        },
        paperStyles: {
            width: '60%',
            margin: 'auto',
            marginBottom: '2em',
        },
        avatarStyles: {
            margin: 'auto',
            // textAlign: '-webkit-center',
            // display: 'flex',
            '& > *': {
                margin: theme.spacing(3),
            },
            // width: '100%'
        },
        avatarContainerStyles: {
            width: theme.spacing(11),
            height: theme.spacing(11),
            // textShadow: '2em 2em red',
            //margin: 0
        },
        teamStyles: {
            lineHeight: '.5em',
            textAlign: 'center',
            margin: 'auto',
        },
    }));
    const classes = useStyles();

    return (
        <container className={classes.employeeContainerStyles}>
            <Paper elevation={5} className={classes.paperStyles}>
                <Grid container>
                    <Grid item xs={12} md={4} className={classes.avatarStyles}>
                        <Avatar className={classes.avatarContainerStyles} alt="Jason Thomas" src={jason} />
                    </Grid>
                    <Grid item xs={12} md={8} className={classes.teamStyles}>
                        <h3>Jason Thomas</h3>
                        <p>Software Developer</p>
                        <p>"Megatron"</p>
                    </Grid>
                </Grid>
            </Paper>
        </container>
    );
};

export default EmployeeCard;