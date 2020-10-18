import React, { useState } from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    page: {
        display: 'flex',
        height: '100%'
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBarSpacer: theme.mixins.toolbar,
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        padding: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}))

const Header = ({sidebarExpanded, onToggle}) => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    // const [sidebarExpanded, setSidebarExpanded] = useState(true);

    const handleExpand = () => {
        onToggle(true);
    }

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, sidebarExpanded && classes.appBarShift)}
        >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleExpand}
                        className={clsx(classes.menuButton, sidebarExpanded && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Dashboard
            </Typography>
            <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton> */}
                </Toolbar>
            </AppBar>
    )
}

export default Header;