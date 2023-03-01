import { styled } from '@mui/material/styles';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => {});

const AppWrapper = styled('div')(() => ({
    display: 'flex',
    height: '100vh',
    width: '100vw',
    position: 'relative',
}));

const LeftWrapper = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        // flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));

const LeftBackground = styled('div')(() => ({
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    transform: 'scaleX(-1)',
    background:
        'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)) center center / cover no-repeat, url(/assets/background/overlay_2.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
}));

const RightWrapper = styled('div')(({ theme }) => ({
    padding: '120px 64px 0px',
    width: '480px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
        paddingTop: '140px',
        flexShrink: 0,
    },
}));

const RightContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

function SignUp() {
    return (
        <Box className="h-100">
            <AppWrapper>
                <LeftWrapper>
                    <Typography marginBottom="60px" variant="h3">
                        Hi, Welcome back
                    </Typography>
                    <Box>
                        <img src={require('@/assets/images/auth_image.png')} alt=""></img>
                    </Box>
                    <LeftBackground />
                </LeftWrapper>
                <RightWrapper>
                    <RightContent>
                        <Box marginBottom="40px">
                            <Typography variant="h4" marginBottom="20px">
                                Get started absolutely free.
                            </Typography>
                            <Typography variant="body2" component="span">
                                Already have an account?&nbsp;
                            </Typography>
                            <Link>
                                <Typography variant="subtitle2" component="span" color="primary.main">
                                    Sign in
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // error
                                        id="outlined-error"
                                        label="First Name"
                                        defaultValue="Tien"
                                        // helperText="This field is required."
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        // error
                                        id="outlined-error"
                                        label="Last Name"
                                        defaultValue=""
                                        // helperText="This field is required."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error
                                        id="outlined-error"
                                        label="Username"
                                        defaultValue=""
                                        helperText="This field is required."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error
                                        id="outlined-error"
                                        label="Password"
                                        defaultValue=""
                                        helperText="This field is required."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error
                                        id="outlined-error"
                                        label="Confirm Password"
                                        defaultValue=""
                                        helperText="This field is required."
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </RightContent>
                </RightWrapper>
            </AppWrapper>
        </Box>
    );
}

export default SignUp;
