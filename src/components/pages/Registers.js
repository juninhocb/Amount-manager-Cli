import btnAdd from "../../assets/images/btn-add.svg";
import CardButton from "../widgets/CardButton";
import { useState } from "react";
import ModalParent from "../modals/ModalParent";
import AddCategoryModal from "../modals/AddCategoryModal";
import styles from  "./Registers.module.css";
import SizedBox from "../styles/SizedBox";
import SelectField from "../forms/SelectField";
import ContentRegisters from "../styles/ContentRegisters";

function Registers(){

    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

    function closeAddCategoryModal(){
        setShowAddCategoryModal(false);
    }

    function openAddCategoryModal(){
        setShowAddCategoryModal(true);
    }

    return (
        <section>
            <div className={styles.mainParent}>
                <div className={styles.cards}>
                    <SizedBox height={"20px"} />
                    <CardButton
                        alt={"add-button"}
                        img={btnAdd}
                        text={"Add a Category"}
                        onClick={openAddCategoryModal}
                    />
                    <SizedBox height={"10px"} />
                    <CardButton
                        alt={"add-button"}
                        img={btnAdd}
                        text={"Add Unit type"}
                    />
                    <SizedBox height={"10px"} />
                    <CardButton
                        alt={"add-button"}
                        img={btnAdd}
                        text={"Add Sub Category"}
                    />
                    <SizedBox height={"10px"} />
                    <CardButton
                        alt={"add-button"}
                        img={btnAdd}
                        text={"Add Product"}
                    />
                    <SizedBox height={"10px"} />
                    <CardButton
                        alt={"add-button"}
                        img={btnAdd}
                        text={"Add user to user group"}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.select}>
                        <SelectField text={"Select desired stuff "} />
                    </div>
                    <SizedBox height={"30px"} />
                    <ContentRegisters />
                </div>
            </div>
            <div>
                {showAddCategoryModal &&
                    <ModalParent
                        modalToDisplay={<AddCategoryModal onClose={closeAddCategoryModal} />}
                    />
                }
            </div>
        </section>
    );
}

export default Registers