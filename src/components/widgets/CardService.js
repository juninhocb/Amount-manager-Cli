import styles from "./CardService.module.css";

function CardService({textTop, textBottom, img, alt}){
    return (
        <div className={styles.cardService}>
            <img src={img} alt={alt} height={"75px"} />
            <label className={styles.labelTop}> {textTop} </label>
            <label className={styles.labelBottom}> {textBottom} </label>
        </div>
    );
}

export default CardService