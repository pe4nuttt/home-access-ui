import { useState } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';

import ConfirmAccessModal from './ConfirmAccessModal';
import CallingModal from './CallingModal';
import AcceptAcessModal from './AccepAccessModal';
import styles from './AccessControlModals.module.scss';

const cx = classNames.bind(styles);

function AccessControlModals() {
    const [isCallingModal, setIsCallingModal] = useState(false);
    const [isConfirmModal, setIsConfirmModal] = useState(false);
    const [isStep3, setIsStep3] = useState(false);

    const handleAcceptCalling = () => {
        setIsCallingModal(false);
        setIsConfirmModal(true);
    };

    const handleCloseCalling = () => {
        setIsCallingModal(false);
    };

    const handleAcceptAccess = () => {};

    const handleCloseAccess = () => {
        setIsConfirmModal(false);
    };

    const [step, checkStep] = useState();

    return (
        // <div className={cx('container')}>
        //     {step === 1 && <CallingModal></CallingModal>}
        //     {step === 2 && <ConfirmAccessModal></ConfirmAccessModal>}
        // </div>
        <>
            <CallingModal
                isOpen={isCallingModal}
                onAccept={handleAcceptCalling}
                onClose={handleCloseCalling}
            ></CallingModal>
            <ConfirmAccessModal
                isOpen={isConfirmModal}
                onAccept={handleAcceptAccess}
                onClose={handleCloseAccess}
            ></ConfirmAccessModal>
            <AcceptAcessModal isOpen={isStep3}></AcceptAcessModal>
        </>
    );
}

export default AccessControlModals;
