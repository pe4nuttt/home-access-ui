import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import accessSlice from './accessSlice';

import ConfirmAccessModal from './ConfirmAccessModal';
import CallingModal from './CallingModal';
import AcceptAcessModal from './AccepAccessModal';

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

const StyledDiaglog = styled(Dialog)({
    display: 'flex',
    justifyContent: 'space-between',
});

function AccessControlModals() {
    // const [isCallingModal, setIsCallingModal] = useState(false);
    // const [isConfirmModal, setIsConfirmModal] = useState(false);
    // const [isStep3, setIsStep3] = useState(false);

    // const handleAcceptCalling = () => {
    //     setIsCallingModal(false);
    //     setIsConfirmModal(true);
    // };

    // const handleCloseCalling = () => {
    //     setIsCallingModal(false);
    // };

    // const handleAcceptAccess = () => {};

    // const handleCloseAccess = () => {
    //     setIsConfirmModal(false);
    // };

    // const [step, checkStep] = useState();

    // return (
    //     // <div className={cx('container')}>
    //     //     {step === 1 && <CallingModal></CallingModal>}
    //     //     {step === 2 && <ConfirmAccessModal></ConfirmAccessModal>}
    //     // </div>
    //     <>
    //         <CallingModal
    //             isOpen={isCallingModal}
    //             onAccept={handleAcceptCalling}
    //             onClose={handleCloseCalling}
    //         ></CallingModal>
    //         <ConfirmAccessModal
    //             isOpen={isConfirmModal}
    //             onAccept={handleAcceptAccess}
    //             onClose={handleCloseAccess}
    //         ></ConfirmAccessModal>
    //         <AcceptAcessModal isOpen={isStep3}></AcceptAcessModal>
    //     </>
    // );

    const dispatch = useDispatch();

    const { isCallingModal, isConfirmAccessModal, isAccessSucessModal } = useSelector((state) => state.access);

    const { mqttMessage } = useSelector((state) => state.app);

    const imageSrc = 'data:image/png;base64,' + mqttMessage.image;

    const guestImgRef = useRef(null);

    // useEffect(() => {
    //     dispatch(accessSlice.actions.setIsCallingModal(true));
    // }, []);

    const closeCallingModal = () => {
        dispatch(accessSlice.actions.setIsCallingModal(false));
    };

    const handleAcceptCalling = () => {
        dispatch(accessSlice.actions.setIsCallingModal(false));
        dispatch(accessSlice.actions.setIsConfirmAccessModal(true));
    };

    const closeConfirmModal = () => {
        dispatch(accessSlice.actions.setIsConfirmAccessModal(false));
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
                            onClick={closeCallingModal}
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
                            onClick={closeConfirmModal}
                        >
                            Deny
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<LockOpenOutlinedIcon />}
                            onClick={closeConfirmModal}
                        >
                            Accept
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
    );
}

export default AccessControlModals;
