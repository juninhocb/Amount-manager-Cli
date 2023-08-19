import styles from "./CardButton.module.css";
function CardButton({img, alt, text, onClick}){
    return (
        <div onClick={onClick} className={styles.cardButton}>
            <img height={"50px"} src={img} alt={alt} />
            <label> {text} </label>
        </div>
    );
}

export default CardButton