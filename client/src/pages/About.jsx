import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import about from '../images/texas.jpg';
import EmployeeCard from '../components/EmployeeCard'

const About = () => {
    const useStyles = makeStyles(theme => ({
        cont: {
            height: '100%'
        },
        root: {
            // flexGrow: 1,
            backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${about})`, // no-repeat center top fixed`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            position: 'relative',
            height: '30vh',
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
            opacity: 0.65

        },
        imageTextStyles: {
            textAlign: 'center'
        },
        quoteText: {
            color: 'white',
            marginTop: '0',
            textAlign: 'center',
            height: '100%',
            paddingTop: '9vh',
        },
        gridStyles: {
            // textAlign: 'center',
            // marginLeft: '3em',
            // marginReft: '3em'
        },
        textStyles: {
            paddingLeft: '3em',
            paddingReft: '3em'
        },
        teamStyles: {
            textAlign: 'center',
        },
        employeeStyles: {
            margin: 'auto'
        },
        // subGridStyles: {
        //     marginTop: '0px',
        //     paddingTop: '12%',
        //     [theme.breakpoints.down('md')]: {
        //         paddingTop: '0px',
        //     },
        // },
    }));
    const classes = useStyles();

    return ( 
        <Container maxWidth="xl" className={classes.cont} disableGutters>
            <Container maxWidth="xl" className={classes.root} disableGutters>
                <h1 className={classes.quoteText}>
                Quality means doing it right when no one is looking.
                <br/>
                    ~Henry Ford
                </h1>
            </Container>
            <Container>
            <Grid container className={classes.gridStyles}>
                <Grid item xs={6} className={classes.textStyles}>
                    <h2>Our Story</h2>
                    <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                    <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </Grid>
                <Grid item xs={6} className={classes.teamStyles}>
                    <h2>Meet Our Team</h2>
                    <EmployeeCard className={classes.teamStyles}/>
                    <EmployeeCard />
                </Grid>
            </Grid>
            </Container>
        </Container>
    );
};

export default About;