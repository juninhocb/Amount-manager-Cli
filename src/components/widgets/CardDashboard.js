import styles from "./CardDashboard.module.css";
function CardDashboard({textTop, textBottom}){
    return (
        <div className={styles.cardDashboard}>
            <label className={styles.labelTop}> {textTop} </label>
            <label className={styles.labelBottom}> {textBottom} </label>
        </div>
    );
}

export default CardDashboard