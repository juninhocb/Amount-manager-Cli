import styles from "./DisplayRow.module.css";
function DisplayRow({ components }) {
    return (
        <div className={styles.displayRow}>
            {components}
        </div>
    );
}

export default DisplayRow