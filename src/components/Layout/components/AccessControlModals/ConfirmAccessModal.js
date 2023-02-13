// import { useState } from 'react';
// import ReactModal from 'react-modal';
// import Popup from 'reactjs-popup';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';

// import Button from '@/components/Button/Button';

// function ConfirmAccessModal() {
//     const [open, setOpen] = useState(true);
//     const closeModal = () => setOpen(false);

//     return (
//         <Popup trigger={<button className="button"> Open Modal </button>} modal nested>
//             {(close) => (
//                 <div className="modal">
//                     <button className="close" onClick={close}>
//                         &times;
//                     </button>
//                     <div className="header">Confirm Access Home</div>
//                     <div className="content">Do you want to open door?</div>
//                     <div className="actions">
//                         <Button
//                             className="button"
//                             buttonStyle="btn--secondary"
//                             onClick={() => {
//                                 console.log('modal closed ');
//                                 close();
//                             }}
//                         >
//                             <FontAwesomeIcon className="mr-10" icon={faXmark}></FontAwesomeIcon>
//                             Deny
//                         </Button>
//                         <Button className="ml-5" buttonStyle="btn--success">
//                             {/* <FontAwesomeIcon className="mr-10" icon={faPhone}></FontAwesomeIcon> */}
//                             Accept
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </Popup>
//     );
// }

// export default ConfirmAccessModal;

import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Transition from '@/utils/custom/Transition';

function ConfirmAccessModal() {
    const [open, setOpen] = useState(true);

    // setTimeout(() => {
    //     setOpen(false);
    // }, 30000);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullWidth={true}
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{'Confirm Access Home'}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">Do you want to open the door?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" onClick={handleClose}>
                    Deny
                </Button>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Accept
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmAccessModal;
