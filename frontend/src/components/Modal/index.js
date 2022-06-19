import styles from './modal.module.css'

const Modal = ({showModal, children}) =>
{
    const modalStyle = showModal ? styles.showModal : styles.hideModal;

    return(
        <div className = {modalStyle}>
            <p className = {styles.modalContent}>{children}</p>
        </div>
    )
}

export default Modal;