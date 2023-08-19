import styles from "./Tittle.module.css";

function Tittle({text}) {
    return (
        <div className={styles.tittle}>
            <h3> {text} </h3>
        </div>
    );
}

export default Tittle