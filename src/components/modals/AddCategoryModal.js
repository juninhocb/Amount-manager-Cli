import TextField from "../forms/TextField";
import Button from "../widgets/Button";
import SizedBox from "../styles/SizedBox";
import styles from "./AddCategoryModal.module.css";

function AddCategoryModal({onClose}){
    return (
      <div className={styles.modalCategory}>
        <label> Add new category</label>
        <SizedBox height={"15px"} />
        <form>
            <TextField
                placeholder={"Enter with category name"}
                label={"Name"}
                type={"text"}
            />
            <SizedBox height={"15px"} />
            <div className={styles.btn}>
                <Button
                    text={"Save"}
                />
                <SizedBox width={"10px"} />
                <Button
                    text={"Cancel"}
                    handleClick={onClose}
                />
            </div>


        </form>
      </div>
    );
}

export default AddCategoryModal