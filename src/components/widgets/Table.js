import styles from "./Table.module.css";
function Table(){
    return (
        <div className={styles.tableParent}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th> Date </th>
                    <th> Description </th>
                    <th> Favored </th>
                    <th> Bank Account </th>
                    <th> Amount </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> 15/08/2023</td>
                    <td> Spent with market </td>
                    <td> Komprão </td>
                    <td> Banco Brazil - 1305</td>
                    <td style={{color: "red"}}> - 254,72 </td>
                </tr>
                <tr>
                    <td> 15/08/2023</td>
                    <td> Energy bill </td>
                    <td> Celesc </td>
                    <td> Banco Brazil - 1305</td>
                    <td style={{color: "red"}}> - 132,72 </td>
                </tr>
                <tr>
                    <td> 12/08/2023</td>
                    <td> Salary </td>
                    <td> Carlos jr </td>
                    <td> Banco Brazil - 1305</td>
                    <td style={{color: "green"}}> + 2.706,36 </td>
                </tr>
                <tr>
                    <td> 10/08/2023</td>
                    <td> Spent in amazon store Alexa Echo Dot 3 </td>
                    <td> Amazon </td>
                    <td> Sicredi - 1212</td>
                    <td style={{color: "red"}}> - 425,00 </td>
                </tr>
                <tr>
                    <td> 08/08/2023</td>
                    <td> Spent with market </td>
                    <td> Komprão </td>
                    <td> Banco Brazil - 1305</td>
                    <td style={{color: "red"}}> - 215,11 </td>
                </tr>
                <tr>
                    <td> 07/08/2023</td>
                    <td> Freelancer </td>
                    <td> Carlos Jr </td>
                    <td> Sicredi - 1212</td>
                    <td style={{color: "green"}}> + 500,00 </td>
                </tr>
                <tr>
                    <td> 06/08/2023</td>
                    <td> Home rent </td>
                    <td> Schork Imóveis </td>
                    <td> Banco Brazil - 1305</td>
                    <td style={{color: "red"}}> - 1.251,64 </td>
                </tr>
                <tr>
                    <td> 06/08/2023</td>
                    <td> Spent with market </td>
                    <td> Komprão </td>
                    <td> Sicredi - 1305</td>
                    <td style={{color: "red"}}> - 721,15 </td>
                </tr>
                <tr>
                    <td> 02/08/2023</td>
                    <td> Freelancer </td>
                    <td> Carlos Jr </td>
                    <td> Sicredi - 1212</td>
                    <td style={{color: "green"}}> + 300,00 </td>
                </tr>
                <tr>
                    <td> 01/08/2023</td>
                    <td> Spent with market </td>
                    <td> Komprão </td>
                    <td> Banco Brazil - 1305</td>
                    <td style={{color: "red"}}> - 417,17 </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table