import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import accessSlice from './accessSlice';
import { useSnackbar } from 'notistack';
import { styled, Box, Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Transition from '@/utils/custom/Transition';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CustomCloseButton from '@/components/Snackbar/components/CustomCloseButton';
import { publishToTopic } from '@/utils/mqtt';

const StyledDiaglog = styled(Dialog)({
    display: 'flex',
    justifyContent: 'space-between',
});

function AccessControlModals() {
    const dispatch = useDispatch();
    const { isCallingModal, isConfirmAccessModal, isAccessSucessModal } = useSelector((state) => state.access);
    const { mqttMessage } = useSelector((state) => state.app);
    const imageSrc = 'data:image/png;base64,' + mqttMessage.image;
    const guestImgRef = useRef(null);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const closeCallingModal = () => {
        dispatch(accessSlice.actions.setIsCallingModal(false));
    };
    const closeConfirmModal = () => {
        dispatch(accessSlice.actions.setIsConfirmAccessModal(false));
    };
    useEffect(() => {
        if (isCallingModal == true) {
            console.log('calling modal');

            const timeoutId = setTimeout(() => {
                closeCallingModal();
                const msgObject = { MQTT_STATUS: 2 };
                publishToTopic(JSON.stringify(msgObject));
            }, 5000);
            clearTimeout(timeoutId);
        }
    }, [isCallingModal]);

    useEffect(() => {
        if (isConfirmAccessModal == true) {
            console.log('confirm modal');
            const timeoutId = setTimeout(() => {
                const msgObject = { MQTT_STATUS: 2 };
                publishToTopic(JSON.stringify(msgObject));
                closeConfirmModal();
            }, 5000);
            clearTimeout(timeoutId);
        }
    }, [isConfirmAccessModal]);

    const handleAcceptCalling = () => {
        dispatch(accessSlice.actions.setIsCallingModal(false));
        dispatch(accessSlice.actions.setIsConfirmAccessModal(true));
    };
    const handleConfirmAcces = () => {
        enqueueSnackbar('Successfully!', {
            variant: 'success',
            action: (key) => <CustomCloseButton onClick={() => closeSnackbar(key)}></CustomCloseButton>,
        });
        const msgObject = { MQTT_STATUS: 3 };
        publishToTopic(JSON.stringify(msgObject));
        closeConfirmModal();
    };

    const closeAccessModal = () => {
        dispatch(accessSlice.actions.setIsCallingModal(false));
        dispatch(accessSlice.actions.setIsAccessSucessModal(false));
    };

    const handleDenyCalling = () => {
        dispatch(accessSlice.actions.setIsCallingModal(false));
        const msgObject = { MQTT_STATUS: 4 };
        publishToTopic(JSON.stringify(msgObject));
    };

    const handleDenyAccess = () => {
        dispatch(accessSlice.actions.closeConfirmModal(false));
        const msgObject = { MQTT_STATUS: 4 };
        publishToTopic(JSON.stringify(msgObject));
    };

    return (
        <div>
            <Dialog
                fullWidth={true}
                open={isCallingModal}
                maxWidth={'sm'}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        m: 'auto',
                        width: 'fit-content',
                    }}
                >
                    <DialogTitle id="alert-dialog-title">{'Home Access'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Someone is calling for home access
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'space-between' }}>
                        <Button
                            size="large"
                            variant="contained"
                            color="error"
                            startIcon={<CloseOutlinedIcon />}
                            onClick={handleDenyCalling}
                        >
                            Deny
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            startIcon={<CheckOutlinedIcon />}
                            onClick={handleAcceptCalling}
                        >
                            Accept
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
            <Dialog
                fullWidth={true}
                open={isConfirmAccessModal}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        m: 'auto',
                        width: 'fit-content',
                    }}
                >
                    <DialogTitle id="alert-dialog-title">{'Confirm Access Home'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you want to open the door?
                            {/* <img alt="" src="" ref={guestImgRef}></img> */}
                        </DialogContentText>
                    </DialogContent>
                    <Avatar
                        alt="Guest Image"
                        ref={guestImgRef}
                        src={imageSrc}
                        sx={{ width: 200, height: 200, margin: '10px 0' }}
                    />
                    <DialogActions sx={{ justifyContent: 'space-between' }}>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<LockOutlinedIcon />}
                            onClick={handleDenyAccess}
                        >
                            Deny
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<LockOpenOutlinedIcon />}
                            onClick={handleConfirmAcces}
                        >
                            Accept
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
            <Dialog
                fullWidth={true}
                open={isAccessSucessModal}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        m: 'auto',
                        width: 'fit-content',
                    }}
                >
                    <DialogTitle id="alert-dialog-title">{'Confirm Access Home'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Toan opened the door
                            {/* <img alt="" src="" ref={guestImgRef}></img> */}
                        </DialogContentText>
                    </DialogContent>
                    <Avatar
                        alt="Guest Image"
                        ref={guestImgRef}
                        src={imageSrc}
                        sx={{ width: 200, height: 200, margin: '10px 0' }}
                    />
                    <DialogActions sx={{ justifyContent: 'space-between' }}>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<CloseOutlinedIcon />}
                            onClick={closeAccessModal}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}

export default AccessControlModals;
