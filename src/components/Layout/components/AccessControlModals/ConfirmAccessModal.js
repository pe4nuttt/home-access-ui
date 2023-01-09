import { useState } from 'react';
import ReactModal from 'react-modal';
import Popup from 'reactjs-popup';

function ConfirmAccessModal() {
    const [open, setOpen] = useState(true);
    const closeModal = () => setOpen(false);

    return (
        <Popup trigger={<button className="button"> Open Modal </button>} modal nested>
            {(close) => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> You have a Calling </div>
                    <div className="content">Someone is Calling</div>
                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            Close
                        </button>
                        <button className="ml-5">Accept</button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default ConfirmAccessModal;
