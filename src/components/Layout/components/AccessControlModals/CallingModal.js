import { useState } from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button/Button';

function CallingModal({ isOpen }) {
    const [open, setOpen] = useState(true);
    const closeModal = () => setOpen(false);
    return (
        // <div>
        //     <button type="button" className="button" onClick={() => setOpen((o) => !o)}>
        //         Controlled Popup
        //     </button>
        //     <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        //         <div className="modal">
        //             <a className="close" onClick={closeModal}>
        //                 &times;
        //             </a>
        //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo, maxime
        //             molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti ratione sapiente!
        //             Laudantium, aperiam doloribus. Odit, aut.
        //         </div>
        //     </Popup>
        // </div>
        <Popup trigger={<button className="button"> Open Modal </button>} modal nested>
            {(close) => (
                <div className="modal">
                    <Button className="close" buttonStyle="btn--primary" onClick={close}>
                        &times;
                    </Button>
                    <div className="header"> You have a Call </div>
                    <div className="content">Someone is Calling</div>
                    <div className="actions">
                        <Button
                            className="button"
                            buttonStyle="btn--secondary"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            <FontAwesomeIcon className="mr-10" icon={faXmark}></FontAwesomeIcon>
                            Deny
                        </Button>
                        <Button className="ml-5" buttonStyle="btn--success">
                            <FontAwesomeIcon className="mr-10" icon={faPhone}></FontAwesomeIcon>
                            Accept
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default CallingModal;
