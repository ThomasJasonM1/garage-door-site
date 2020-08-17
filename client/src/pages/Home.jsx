import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from "../components/Card";
import house from '../images/house.jpg';
import { Hidden } from '@material-ui/core';

const Home = () => {
    const useStyles = makeStyles(theme => ({
        homeRoot: {
            // flexGrow: 1,
            background: `url(${house}) no-repeat center center fixed`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            //overflow: 'hidden',
            position: 'fixed',
        },
        homeRoot1: {},
        subGridStyles: {
            marginTop: '0px',
            paddingTop: '12%',
            [theme.breakpoints.down('md')]: {
                paddingTop: '0px',
            },
        },
    }));
    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={classes.homeRoot} spacing={2}>
            <Container maxWidth="xl" disableGutters>
            {/* item sm={'auto'} > */}
                <Grid container justify="center" spacing={7} className={classes.subGridStyles} alignContent='center'> 
                    <Grid key='Repairs' item>
                        <Card className={classes.homeRoot1}
                            
                            categoryTitle="Repairs"
                            description="Garage door repairs are never fun and often very inconvenient. 
                                Trust our experts to accurately resolve any issue in a timely manor!"
                            image="../static/media/broken-springs.jpg"
                            imageTitle="Ugh, how will I get my car out of here?!"
                        /> 
                    </Grid>
                    <Grid key='New' item>
                        <Card className={classes.homeRoot1}
                            
                            categoryTitle="New Doors"
                            description="New garage doors can add an huge curn appeal to your home.
                                Not to mention, they can tack on a decent increase in property valuse!"
                            image="../static/media/new-doors.png"
                            imageTitle="Karen is super jealous of my new garage door!"
                        /> 
                    </Grid>
                    <Grid key='New' item>
                        <Card className={classes.homeRoot1}
                            
                            categoryTitle="Openers"
                            description="Modern openers are much more quite and most models will even 
                                connect to the internet and smart home hub; come take a look!"
                            image="../static/media/opener.png"
                            imageTitle="Wow, why did I wait so long to replace this thing?!"
                        /> 
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default Home;