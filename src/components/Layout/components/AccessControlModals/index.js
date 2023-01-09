import { useState } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';

import ConfirmAccessModal from './ConfirmAccessModal';
import CallingModal from './CallingModal';
import AcceptAcessModal from './AccepAccessModal';
import styles from './AccessControlModals.module.scss';

const cx = classNames.bind(styles);

function AccessControlModals() {
    const [isStep1, setIsStep1] = useState(false);
    const [isStep2, setIsStep2] = useState(false);
    const [isStep3, setIsStep3] = useState(false);

    return (
        // <div className={cx('container')}>
        //     {step === 1 && <CallingModal></CallingModal>}
        //     {step === 2 && <ConfirmAccessModal></ConfirmAccessModal>}
        // </div>
        <>
            <CallingModal isOpen={isStep1}></CallingModal>
            <ConfirmAccessModal isOpen={isStep2}></ConfirmAccessModal>
            <AcceptAcessModal isOpen={isStep3}></AcceptAcessModal>
        </>
    );
}

export default AccessControlModals;
