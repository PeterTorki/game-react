import React from 'react'
import ReactDOM from 'react-dom';
import rules from '../../assets/images/image-rules-bonus.svg'

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    return (
        <div className="rules__container">
            <span className="title">
                Rules
            </span>
            <span className="rules">
                <img src={rules} alt="" />
            </span>
            <span>
                <button className="close-btn" onClick={props.onConfirm}>
                    &#10005;
                </button>
            </span>
        </div>
    );
};
export default function Rules(props) {
    const portalElement = document.getElementById('overlays');
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, portalElement)}
        </>
    )
}
