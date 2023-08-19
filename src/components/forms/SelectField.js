import styles from "./SelectField.module.css";
function SelectField({type, categories, text}){
    return (
        <div className={styles.select}>
            <label> {text}</label>
            <select >
                <option> Select {type} </option>
                <option> Option 1</option>
                <option> Option 2</option>
                <option> Option 3</option>
            </select>
        </div>
    );
}

export default SelectField