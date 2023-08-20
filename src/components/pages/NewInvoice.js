import DisplayRow from "../styles/DisplayRow";
import CardButton from "../widgets/CardButton";
import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import styles from "./NewInvoice.module.css";
import { useState } from "react";
import TextField from "../forms/TextField";
import SelectField from "../forms/SelectField";
import Button from "../widgets/Button";
import SizedBox from "../styles/SizedBox";

function NewInvoice(){
    const [isIncome, setIsIncome] = useState(true);

    const handleIncomeClick = () => {
        setIsIncome(true);
    };

    const handleOutcomeClick = () => {
        setIsIncome(false);
    };

    function handleSubmit(){

    }

    const components = [
        <CardButton
            onClick={handleIncomeClick}
            img={incomeImg}
            alt={"income"}
            text={"Income Founds"} />,
        <CardButton
            onClick={handleOutcomeClick}
            img={outcomeImg}
            alt={"outcome"}
            text={"Outcome Founds"}/>
    ];



    return (
        <section>
            <div className={styles.btn}>
                <DisplayRow components={components} />
            </div>
            {isIncome ? (
                <div className={styles.form}>
                    <form>
                        <label className={styles.tittleLabel}> Income Found </label>
                        <TextField type={"text"}
                                   label={"Description"}
                                   placeholder={"Brief description"}
                        />
                        <SizedBox height={"15px"} />
                        <SelectField
                            text={"Category"}
                            type={"Category"}
                        />
                        <SizedBox height={"15px"} />
                        <SelectField
                            text={"Bank Account"}
                            type={"Bank Account"}
                        />
                        <SizedBox height={"10px"} />
                        <TextField type={"number"}
                                   label={"Amount"}
                                   placeholder={"Amount earned"}
                        />
                        <SizedBox height={"20px"} />
                        <Button text={"Confirm"} handleClick={handleSubmit} />
                    </form>
                </div>
            ) : (
                <div className={styles.form}>
                    <form>
                        <label className={styles.tittleLabel}> Outcome Found </label>
                        <TextField type={"text"}
                                   label={"Description"}
                                   placeholder={"Brief description"}
                        />
                        <SizedBox height={"15px"} />
                        <SelectField
                            text={"Category"}
                            type={"Category"}
                        />
                        <SizedBox height={"15px"} />
                        <SelectField
                            text={"Bank Account"}
                            type={"Bank Account"}
                        />
                        <SizedBox height={"10px"} />
                        <SelectField
                            text={"Product"}
                            type={"Product"}
                        />
                        <SizedBox height={"10px"} />
                        <TextField type={"number"}
                                   label={"Amount"}
                                   placeholder={"Amount spent"}
                        />
                        <SizedBox height={"20px"} />
                        <Button text={"Confirm"} handleClick={handleSubmit} />
                    </form>
                </div>
            )}
        </section>
    );
}

export default NewInvoice