import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Avatar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import QrCodeIcon from '@mui/icons-material/QrCode';
import HistoryIcon from '@mui/icons-material/History';
import { Link, NavLink } from 'react-router-dom';
import images from '@/assets/images';
import AccessControlModals from './components/AccessControlModals';

const drawerWidth = 260;
const drawerWidthClose = 65;

const useStyles = makeStyles((theme) => ({
    avatarBox: {
        margin: 'auto',
    },
    avatarStyle: {
        width: '40px !important',
        height: '40px !important',
        marginRight: '16px',
    },
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    // transition: theme.transitions.create('width', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    // }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    // transition: theme.transitions.create('width', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    // }),
    overflowX: 'hidden',
    // width: `calc(${theme.spacing(7)} + 1px)`,
    width: drawerWidthClose,
    // [theme.breakpoints.up('sm')]: {
    //     width: `calc(${theme.spacing(8)} + 1px)`,
    // },
});

const AppLogo = styled('img')(() => ({
    width: '40px',
    filter: 'invert(79%) sepia(62%) saturate(589%) hue-rotate(76deg) brightness(84%) contrast(85%)',
}));

const DrawerHeader = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 1),
    position: 'relative',

    ...(open && {
        padding: theme.spacing(2, 2),
    }),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    // transition: theme.transitions.create(['width', 'margin'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    // }),
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidthClose}px)`,
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    zIndex: 2000,
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const DrawerProfile = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    padding: '16px 20px',
    borderRadius: '12px',
    backgroundColor: 'rgba(145, 158, 171, 0.12)',
}));

const DrawerArrowIconLeft = styled(IconButton)(({ theme }) => ({
    position: 'fixed',
    top: '18px',
    left: `calc(${drawerWidth}px - 11px)`,
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    border: '1px dashed rgba(145, 158, 171, 0.24)',
    backdropFilter: 'blur(6px)',
    width: '24px',
    height: '24px',
}));
const DrawerArrowIconRight = styled(IconButton)(({ theme }) => ({
    position: 'fixed',
    top: '18px',
    left: `calc(${drawerWidthClose}px - 11px)`,
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    border: '1px dashed rgba(145, 158, 171, 0.24)',
    backdropFilter: 'blur(6px)',
    width: '24px',
    height: '24px',
}));

const DrawerList = styled(List, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    padding: '0 4px',
    ...(open && {
        padding: '0 16px',
    }),
}));

const DrawerListItem = styled(ListItem)({
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '4px',
    // display: 'block'
});

const pages = [
    {
        label: 'How To',
        path: '/how-to',
        iconComp: <StickyNote2Icon />,
    },
    {
        label: 'Get QR',
        path: '/get-qr',
        iconComp: <QrCodeIcon />,
    },
    {
        label: 'Tracking',
        path: '/tracking',
        iconComp: <HistoryIcon />,
    },
];

export default function Layout({ children }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Indoor Device
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader open={open}>
                    <Box
                        sx={{
                            textAlign: open ? 'none' : 'center',
                        }}
                    >
                        <Link to="/">
                            <AppLogo src={images.logo} alt="" />
                        </Link>
                    </Box>
                    {open && (
                        <Link to="/profile">
                            <DrawerProfile>
                                <Avatar
                                    alt="avatar"
                                    src="https://img5.thuthuatphanmem.vn/uploads/2021/12/08/aaaaaaaa_093625302.jpg"
                                    className={classes.avatarStyle}
                                />
                                <Box>
                                    <Typography variant="h6">Room 1401</Typography>
                                    <Typography variant="body1" color="grey.600">
                                        Tien Anh
                                    </Typography>
                                </Box>
                            </DrawerProfile>
                        </Link>
                    )}
                    {/* <DrawerArrowIcon onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </DrawerArrowIcon> */}
                    {open ? (
                        <DrawerArrowIconLeft onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </DrawerArrowIconLeft>
                    ) : (
                        <DrawerArrowIconRight onClick={handleDrawerOpen}>
                            <ChevronRightIcon />
                        </DrawerArrowIconRight>
                    )}
                </DrawerHeader>
                <Divider />
                <DrawerList open={open} style={{ color: theme.palette.grey[600] }}>
                    {pages.map((page, index) => (
                        <NavLink
                            to={page.path}
                            key={page.label}
                            // className={cx('nav-links')}
                            className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                            // style={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <DrawerListItem key={page.label} disablePadding>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {page.iconComp}
                                    </ListItemIcon>
                                    <ListItemText primary={page.label} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </DrawerListItem>
                        </NavLink>
                    ))}
                </DrawerList>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
            <AccessControlModals></AccessControlModals>
        </Box>
    );
}
