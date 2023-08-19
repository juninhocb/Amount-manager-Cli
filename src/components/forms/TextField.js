import styles from "./TextField.module.css";
import SizedBox from "../styles/SizedBox";
function TextField({label, placeholder, type, onChange}){
    return(
        <div className={styles.textField}>
            <label> {label} </label>
            <SizedBox height={"5px"}/>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

export default TextField