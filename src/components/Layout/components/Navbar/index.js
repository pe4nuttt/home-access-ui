import classNames from 'classnames/bind';
import {
    Box,
    AppBar,
    Avatar,
    Button,
    Tooltip,
    Toolbar,
    Menu,
    MenuItem,
    styled,
    Typography,
    IconButton,
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const pages = [
    {
        label: 'How To',
        path: '/how-to',
    },
    {
        label: 'Get QR',
        path: '/get-qr',
    },
    {
        label: 'Tracking',
        path: '/tracking',
    },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar className={cx('nav')} position="sticky">
            <StyledToolbar>
                <Box>
                    <Link
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        to="/"
                    >
                        <HouseIcon
                            color="primary"
                            sx={{
                                display: { xs: 'inline-block', sm: 'inline-block' },
                                mr: 1,
                                height: '100%',
                            }}
                        />
                        <Typography
                            color="primary"
                            sx={{
                                display: { xs: 'none', sm: 'inline-block' },
                            }}
                            variant="h6"
                        >
                            Home Access
                        </Typography>
                    </Link>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page.label}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'right' }}>
                    {pages.map((page) => (
                        <Typography variant="div" sx={{ my: 2, color: 'white', display: 'block' }}>
                            <NavLink
                                to={page.path}
                                key={page.label}
                                onClick={handleCloseNavMenu}
                                // className={cx('nav-links')}
                                className={({ isActive }) =>
                                    cx('nav-links', {
                                        active: isActive,
                                    })
                                }
                                // style={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.label}
                            </NavLink>
                        </Typography>
                    ))}
                </Box>

                <Box sx={{ marginLeft: '10px' }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://img5.thuthuatphanmem.vn/uploads/2021/12/08/aaaaaaaa_093625302.jpg"
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </StyledToolbar>
        </AppBar>
    );
}

export default Navbar;
