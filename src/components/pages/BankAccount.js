import CardButton from "../widgets/CardButton";
import btnAdd from "../../assets/images/btn-add.svg";
import btnEdit from "../../assets/images/edit.svg";
import btnView from "../../assets/images/view.svg";
import styles from "./BankAccount.module.css";
import BankTable from "../widgets/BankTable";
import ModalParent from "../modals/ModalParent";
import { useState } from "react";
import AddModal from "../modals/AddModal";
import EditModal from "../modals/EditModal";
import ViewModal from "../modals/ViewModal";


function BankAccount(){

    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);

    function closeAddModal(){
        setShowAddModal(false);
    }

    function openAddModal(){
        setShowAddModal(true);
    }

    function closeEditModal(){
        setShowEditModal(false);
    }

    function openEditModal(){
        setShowEditModal(true);
    }

    function closeViewModal(){
        setShowViewModal(false);
    }

    function openViewModal(){
        setShowViewModal(true);
    }

    return (
        <section>
            <div className={styles.bankAccountCard}>
                <CardButton
                    alt={"add-button"}
                    img={btnAdd}
                    text={"Add a new bank"}
                    onClick={openAddModal}
                />
                <CardButton
                    alt={"edit-button"}
                    img={btnEdit}
                    text={"Edit bank"}
                    onClick={openEditModal}
                />
                <CardButton
                    alt={"view-button"}
                    img={btnView}
                    text={"View bank details"}
                    onClick={openViewModal}
                />
            </div>
            <div>
                <BankTable />
            </div>
            {showAddModal &&
                <ModalParent
                    modalToDisplay={<AddModal closeModal={closeAddModal} /> }
                />}

            {showEditModal &&
                <ModalParent
                    modalToDisplay={<EditModal closeModal={closeEditModal} /> }
                />}
            {showViewModal &&
                <ModalParent
                    modalToDisplay={<ViewModal closeModal={closeViewModal} /> }
                />}

        </section>
    );
}

export default BankAccount