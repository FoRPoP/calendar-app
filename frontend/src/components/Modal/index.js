import styles from './modal.module.css'

const Modal = ({showModal}) =>
{
    const modalStyle = showModal ? styles.showModal : styles.hideModal;

    return(
        <div className = {modalStyle}>
            <div className = {styles.modalContent}>
                modal
            </div>
        </div>
    )
}

export default Modal;