import styles from "./ModalParent.module.css";
function ModalParent ({modalToDisplay, closeModal}) {
    return (
        <div className={styles.fullScreenParent}>
            {modalToDisplay}
        </div>

    );
}
export default ModalParent