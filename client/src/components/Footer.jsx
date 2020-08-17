import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100vw',
        color: 'white',
        textAlign: 'center',
        background: 'black'
    },
    company: {
        float: 'left',
        paddingTop: '1em',
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    contact: {
        float: 'right',
        lineHeight: '5px',
        // textAlign: 'start',
        width: '30%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    socialIcons: {
        paddingTop: '.5em',
    },
    icons: {
        paddingRight: '1em',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    twitterStyles: {
        textDecoration: 'none',
        color: '#1DA1F2'
    },
    facebookStyles: {
        textDecoration: 'none',
        color: '#4267B2'
    },
    linkedinStyles: {
        textDecoration: 'none',
        color: '#2867B2'
    },
    instaStyles: {
        textDecoration: 'none',
        color: '#E1306C'
        
        
    },
    // instaIconStyles: {
    //     color: 'transparent',
    //     background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    //     round: '-webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    //     backgroundClip: 'text',
    //     paddingRight: '1em',
    //     [theme.breakpoints.down('sm')]: {
    //         display: 'none',
    //     },
    // }
}));

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} className={classes.root}>
            <Container disableGutters maxWidth='xl'>
                <div className={classes.company}>Todd's Garage Doors LLC</div>
                <div className={classes.contact}>
                    <p>Phone: (214) 111-1111</p>
                    <p>Emaill: texasGarage@gmail.com</p>
                </div>
                <div className={classes.socialIcons}>
                    <Link className={classes.facebookStyles} href='https://www.facebook.com/' background='1DA1' target="_blank">
                        <FacebookIcon fontSize='large' className={classes.icons}/>
                    </Link>
                    <Link className={classes.twitterStyles} href='https://twitter.com/' target="_blank">
                        <TwitterIcon fontSize='large' className={classes.icons}/>
                    </Link>
                    <Link className={classes.linkedinStyles} href='https://linkedin.com/' target="_blank">
                        <LinkedInIcon fontSize='large' className={classes.icons}/>
                    </Link>
                    <Link className={classes.instaStyles} href='https://www.instagram.com/' target="_blank">
                        <InstagramIcon fontSize='large' className={classes.icons}/>
                    </Link>
                </div>
            </Container>
        </BottomNavigation>
    );
}

export default Footer;
