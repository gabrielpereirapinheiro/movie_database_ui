import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import backgroundLandingPage from '../../assets/img/background.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "100vh",
        backgroundImage: `url(${backgroundLandingPage})`
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
        backgroundColor: '#ffffff',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: 340,
        backgroundColor: '#ffffff',
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
    const [open, setOpen] = useState(true);
    const [step, setStep] = useState(0);
    const [menuSelected, setMenuSelected] = useState('adopt');
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="#000000"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <h1 className={classes.titleNavBar}>TMDb</h1>
                    <IconButton >
                        <button className={classes.buttonSignIn}>Entrar</button>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
