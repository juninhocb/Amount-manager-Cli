import styles from "./Button.module.css";
function Button({handleClick, text}){
    return (
        <button className={styles.btn} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button