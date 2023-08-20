import styles from "./AddModal.module.css";
import TextField from "../forms/TextField";
import Button from "../widgets/Button";
import SizedBox from "../styles/SizedBox";
function AddModal ({closeModal}) {
    return (
      <div className={styles.addModal}>
          <label> Add a new Bank Account</label>
          <SizedBox height={"15px"} />
          <form>
              <TextField
                  label={"Name"}
                  placeholder={"Enter with a fantasy name"}
                  type={"text"}
              />
              <SizedBox height={"10px"} />
              <TextField
                  label={"Account Number"}
                  placeholder={"Enter with Account Number"}
                  type={"number"}
              />
              <SizedBox height={"10px"} />
              <TextField
                  label={"Initial Amount"}
                  placeholder={"Enter with a initial amount"}
                  type={"number"}
              />
              <SizedBox height={"15px"} />
              <div className={styles.btnContainer}>
                  <Button
                      text={"Save"}
                  />
                  <SizedBox width={"10px"}/>
                  <Button
                      text={"Cancel"}
                      handleClick={closeModal}
                  />
              </div>

          </form>

      </div>
    );
}

export default AddModal