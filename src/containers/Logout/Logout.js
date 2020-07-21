import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import loading from '../../assets/img/loading.gif';
import backgroundLandingPage from '../../assets/img/background.jpg';
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "100vh",
        backgroundImage: `url(${backgroundLandingPage})`,
        backgroundSize: "100vw"
    },
    card: {
        width: "25vw",
        height: "70vw",
        backgroundColor: "rgba(0,0,0,.75)",
        marginTop: "5vw",
        marginBottom: "5vw",
        borderRadius: "4px",
    },
    buttonSignIn: {
        backgroundColor: "#e50914",
        lineHeight: "normal",
        padding: "7px 17px",
        fontWeight: 400,
        fontSize: "1rem",
        float: "right",
    },
    titleNavBar: {
        color: "#e50914",
        fontFamily: "nf-icon",
        speak: "none",
        fontStyle: "normal",
        fontWeight: 400,
        fontVariant: "normal",
        textTransform: "none"
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        backgroundColor: 'transparent',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: 340,
        backgroundColor: 'transparent',
        width: `calc(100%)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 340,
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '90vh',
        overflow: 'auto',
        marginTop: 64,
        paddingTop: 40,
        backgroundColor: '#f7f6f6'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    useEffect(() => {
        Cookies.remove('token');
        setTimeout(function () {
            window.location.reload()
        }, 1500);
    });

    return (
        <div className={classes.root}>
            <AppBar
                position="absolute"
                className={clsx(classes.appBar)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="#000000"
                        aria-label="open drawer"
                        className={clsx(
                            classes.menuButton,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <h1 className={classes.titleNavBar}>TMDb</h1>
                </Toolbar>
            </AppBar>
            <div className="App-header App">
                <img alt="loading" src={loading} className={classes.loadingimg} />
            </div>
        </div>
    );
}
