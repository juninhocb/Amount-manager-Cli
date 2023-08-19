import styles from "./BankTable.module.css";
function BankTable(){
    return (
      <div className={styles.bankTableParent}>
          <table className={styles.bankTable}>
              <thead>

                <tr>
                    <th className={styles.name} > Name </th>
                    <th className={styles.accountNumber}> Account Number </th>
                    <th className={styles.active}> Active </th>
                    <th className={styles.actions}> Created time </th>
                </tr>

              </thead>
              <tbody>
                <tr>
                    <td> Banco do Brazil </td>
                    <td> 1305 </td>
                    <td> Yes </td>
                    <td>
                        17/01/2023
                    </td>
                </tr>
                <tr>
                    <td> Sicredi </td>
                    <td> 1212 </td>
                    <td> Yes </td>
                    <td>
                        11/03/2023
                    </td>
                </tr>

              </tbody>
          </table>
      </div>
    );
}

export default BankTable