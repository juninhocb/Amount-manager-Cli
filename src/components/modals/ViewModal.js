import styles from "./ViewModal.module.css";
import Button from "../widgets/Button";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SizedBox from "../styles/SizedBox";
function ViewModal({closeModal}){
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return(
      <div className={styles.viewModal}>

          <label className={styles.tittleLabel}> Bank Account No: 1212 Detail </label>
          <label className={styles.commonLabel}> Period </label>
          <div className={styles.calendarParent}>
              <DatePicker
                  className={styles.textFieldPicker}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                  selectsStart
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Start Date"
              />
              <SizedBox width={"10px"} />
              <DatePicker
                  className={styles.textFieldPicker}
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                  selectsEnd
                  dateFormat="dd/MM/yyyy"
                  placeholderText="End Date"
              />
          </div>
          <SizedBox height={"20px"} />
          <div className={styles.detailContent}>
             <p> <b> Data from 11/07/2023 to 11/08/2023 </b></p>
             <SizedBox height={"10px"} />
             <p> Amount spent: R$ 1.580,35 </p>
             <p> Amount earned: R$ 2.340,72 </p>
             <p> Liquid value: R$ 760,37 </p>
             <p> Total amount end of 11/08/2023: R$ 1221,48</p>
          </div>
          <SizedBox height={"20px"} />
          <Button text={"Get Report"} />
          <SizedBox height={"10px"} />
          <Button handleClick={closeModal} text={"Close"} />


      </div>
    );
}

export default ViewModal