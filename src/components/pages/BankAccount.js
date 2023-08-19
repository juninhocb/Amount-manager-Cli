import CardButton from "../widgets/CardButton";
import btnAdd from "../../assets/images/btn-add.svg";
import btnEdit from "../../assets/images/edit.svg";
import btnView from "../../assets/images/view.svg";
import styles from "./BankAccount.module.css";
import BankTable from "../widgets/BankTable";

function BankAccount(){
    return (
        <section>
            <div className={styles.bankAccountCard}>
                <CardButton alt={"add-button"} img={btnAdd} text={"Add a new bank"} />
                <CardButton alt={"edit-button"} img={btnEdit} text={"Edit bank"} />
                <CardButton alt={"view-button"} img={btnView} text={"View bank details"} />
            </div>
            <div>
                <BankTable />
            </div>
        </section>
    );
}

export default BankAccount