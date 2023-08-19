import Tittle from "../styles/Tittle";
import DisplayRow from "../styles/DisplayRow";
import CardDashboard from "../widgets/CardDashboard";
import CardService from "../widgets/CardService";
import tmimg from "../../assets/images/transaction-management.svg";
import baimg from "../../assets/images/bank-account.svg";
import duimg from "../../assets/images/dashboard-up.svg";
import Table from "../widgets/Table";
import styles from "./Home.module.css";

function Home (){

    const cardComponents = [
        <CardDashboard textTop={"3"} textBottom={"Transactions Earn"} />,
        <CardDashboard textTop={"7"} textBottom={"Transactions Spent"} />,
        <CardDashboard textTop={"R$ 120.00"} textBottom={"Month Balance"} />
    ];

    const cardServices = [
        <CardService textTop={"Transactions Management"}
                     textBottom={"Manage your transaction in a easy way!"}
                     img={tmimg}
                     alt={"transaction"}
        />,
        <CardService textTop={"Bank Monitoring "}
                     textBottom={"Monitor all bank accounts as you want!"}
                     img={baimg}
                     alt={"bank"}
        />,
        <CardService textTop={"Leverage finances"}
                     textBottom={"Do the best choices!"}
                     img={duimg}
                     alt={"dash-up"}
        />
    ];

    return (
       <section>
           <div>
               <Tittle text={"Dashboard"} />
               <DisplayRow components={cardComponents} />
               <Tittle text={"Services"} />
               <DisplayRow components={cardServices} />
               <Tittle text={"Last 10 transactions"} />
               <Table />
           </div>

       </section>
    );
}

export default Home