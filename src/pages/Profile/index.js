import { useState } from 'react';
import { Paper, Box, Grid, styled, Avatar, Typography, TextField, Button } from '@mui/material';
import { StyledPaper } from '@/components/Layout/components/Paper';
import Layout from '@/components/Layout';

const AvatarBox = styled(Box)({
    width: '144px',
    height: '144px',
    margin: 'auto',
    display: 'flex',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '50%',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    border: '1px dashed rgba(145, 158, 171, 0.32)',
});

const RightBoxButton = styled(Box)({
    textAlign: 'right',
});

const avatarTypoStyle = {
    margin: '16px auto 0',
    lineHeight: 1.5,
    fontSize: '0.75rem',
    fontWeight: 400,
    color: 'rgb(99, 115, 129)',
    display: 'block',
    textAlign: 'center',
};

function Profile() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phoneNum: '',
        roomId: '',
        addr: '',
        country: '',
    });

    return (
        <Box>
            <h1>Profile</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <StyledPaper
                        sx={{
                            padding: '80px 24px',
                        }}
                    >
                        <AvatarBox>
                            <Avatar
                                alt="Avatar"
                                src="https://img5.thuthuatphanmem.vn/uploads/2021/12/08/aaaaaaaa_093625302.jpg"
                                sx={{
                                    width: 'calc(100% - 16px)',
                                    height: 'calc(100% - 16px)',
                                }}
                            ></Avatar>
                        </AvatarBox>
                        <Typography variant="p" sx={avatarTypoStyle}>
                            Allowed *.jpeg, *.jpg, *.png, *.gif
                        </Typography>
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <StyledPaper>
                        <Box component="form">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="outline-required"
                                        label="Name"
                                        defaultValue="Tien Anh"
                                        color="grey"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="outline-required"
                                        label="Email"
                                        defaultValue="abcxyz@mail.com"
                                        color="grey"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="outline-required"
                                        label="Phone"
                                        defaultValue="123456"
                                        color="grey"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="outline-required"
                                        label="Room"
                                        defaultValue="12A3"
                                        color="grey"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="outline-required"
                                        label="Address"
                                        defaultValue="Dong Da, HN"
                                        color="grey"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        required
                                        id="outline-required"
                                        label="Country"
                                        defaultValue="Viet Nam"
                                        color="grey"
                                    ></TextField>
                                </Grid>
                            </Grid>
                            <RightBoxButton component="div">
                                <Button variant="contained" sx={{ marginTop: '24px' }}>
                                    Save Changes
                                </Button>
                            </RightBoxButton>
                        </Box>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Profile;
