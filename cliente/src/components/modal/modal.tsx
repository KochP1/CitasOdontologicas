import type { ReactNode } from 'react';
import './modal.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

interface Params {
    modulo: string;
    modal: boolean
    toggle: () => void
    children?: ReactNode
}

export const Modal = ({ modulo, modal, toggle, children }: Params) => {

    if (!modal || !modalRoot) return null;

    return createPortal(
        <>

            {modal && (
                <div className="modal">
                <div onClick={toggle} className="overlay"></div>
                <div className="modal-content">
                    <h2>{modulo}</h2>
                    <div className='children__wrapper'>
                        {children}
                    </div>
                    <button className="close-modal" onClick={toggle}>
                    <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                </div>
            )}
        </>
        ,modalRoot
    );
};