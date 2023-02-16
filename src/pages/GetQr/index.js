import classNames from 'classnames/bind';
import { useState } from 'react';
import { Paper, Box, Grid, Slider, Button, Typography } from '@mui/material';
import { SaveAlt, Share } from '@mui/icons-material';
import { StyledPaper } from '@/components/Layout/components/Paper';
import Layout from '@/components/Layout';
import styles from './GetQr.module.scss';

const cx = classNames.bind(styles);

function GetQr() {
    const [qrTime, setQrTime] = useState(15);

    const handleChangeTime = (e) => {
        setQrTime(e.target.value);
        console.log(qrTime);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Get QR Code');
        //Get QR Code
    };

    return (
        <Box>
            {/* <h1 className={cx('header')}>Create QR Code</h1> */}
            {/* <div classNames={cx('body')}>
                <div className={cx('qr-code')}>
                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                            borderRadius: '10px',
                            border: '1px solid #ccc',
                        }}
                    >
                        <img
                            className={cx('qr-code-img')}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                            alt="qr-code"
                        />
                    </Box>
                </div>
                <form action="" classNames={cx('form')} onSubmit={handleSubmit}>
                    <p classNames={cx('qr-code-duration')}>QR Code is still valid in 10 minutes</p>
                    <label htmlFor="time">Time: {qrTime}</label>
                    <input
                        type="range"
                        id="time"
                        name="time"
                        min="15"
                        max="120"
                        step="5"
                        value={qrTime}
                        onChange={handleChangeTime}
                    />
                    <input type="submit" value="Create QR" />
                </form>
            </div> */}
            <Grid container spacing={4}>
                <Grid item xs={7}>
                    {/* <Box
                        className={cx('test')}
                        sx={
                            {
                                // display: 'flex',
                                // flexDirection: 'column',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                            }
                        }
                    > */}
                    <StyledPaper>
                        <Typography variant="h4" component="h4" marginBottom={3}>
                            Create new Qr Code for friends to acccess your home.
                        </Typography>
                        <Slider
                            aria-label="Time"
                            defaultValue={30}
                            valueLabelDisplay="auto"
                            size="medium"
                            step={5}
                            min={10}
                            max={120}
                            value={qrTime}
                            onChange={handleChangeTime}
                        />
                        <Box
                            sx={{
                                marginBottom: '20px',
                            }}
                        >
                            QR Code's time: {qrTime} minutes
                        </Box>
                        <Box>
                            <Button color="error" variant="contained">
                                Disabled QR
                            </Button>
                            <Button variant="contained">Create QR</Button>
                        </Box>
                    </StyledPaper>
                    {/* </Box> */}
                </Grid>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#00ab5530',
                            borderRadius: '16px',
                            padding: '0 0 40px 0',
                        }}
                    >
                        <Box
                            sx={{
                                width: '300px',
                                borderRadius: '10px',
                            }}
                        >
                            <img
                                className={cx('qr-code-img')}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                alt="qr-code"
                            />
                        </Box>
                        <Typography variant="h6" marginBottom={4}>
                            QR Code is still valid for 10 minutes
                        </Typography>
                        <Box>
                            <Button startIcon={<SaveAlt />} variant="contained">
                                Save
                            </Button>
                            <Button startIcon={<Share />} variant="contained">
                                Share
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GetQr;
