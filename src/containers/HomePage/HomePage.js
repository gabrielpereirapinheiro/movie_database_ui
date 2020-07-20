import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import backgroundLandingPage from '../../assets/img/background.jpg';
import { Link } from 'react-router-dom';
import axios from "../../axios";
import Slider from "react-slick";
import OwlCarousel from 'react-owl-carousel';
import SearchIcon from '@material-ui/icons/Search';
import loading from '../../assets/img/loading.gif';
import netflix from '../../assets/img/netflix.svg';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "100vh",
        backgroundImage: `url(${backgroundLandingPage})`,
        backgroundSize: "100vw"
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
    const [result, setResult] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.getTrending()
            .then((response) => {
                setResult(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <h1 className={classes.titleNavBar}>TMDb</h1>
                     */}

<img alt="logo_preto" src={netflix}  />
                     
                    <IconButton >
                        <SearchIcon />
                    </IconButton>
                    <IconButton >
                        <Link to="/logout">
                            <button className={classes.buttonSignIn}>Sair</button>
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className="card-container">
                {isLoading ? (
                    <div className="App-header App">
                        <img src={loading} className={classes.loadingimg} />
                    </div>
                ) : (
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={10}
                            dots={false}
                            nav
                        >
                            
                            {result.map(function (movie, i) {
                                return <div class="item" key={i}>
                                    <div className="div-slide">
                                        <img className="img-slide" src={"https://image.tmdb.org/t/p/w780/" + movie.poster_path}></img>
                                    </div>
                                </div>
                            })}
                 
                        </OwlCarousel>

                    )}
            </div>
        </div>

    );
}
