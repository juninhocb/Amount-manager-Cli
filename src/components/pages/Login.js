import styles from "./Login.module.css";
import TextField from "../forms/TextField";
import { useState } from "react";
import Button from "../widgets/Button";
import SizedBox from "../styles/SizedBox";
import logo from "../../assets/images/logo.svg"

function Login ({setLogin}){

    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    function handleLogin(){

        setLogin(false);
    }

    return (
        <div className={styles.login}>
            <div className={styles.formDiv}>
                <form className={styles.form}>
                    <img src={logo} alt={"logo"} height={"150px"} />
                    <SizedBox height={"10px"} />
                    <TextField
                        placeholder={"Enter with your username"}
                        type={"text"}
                        label={"Username"}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <SizedBox height={"10px"} />
                    <TextField
                        placeholder={"Enter with your password"}
                        type={"password"}
                        label={"Password"}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <SizedBox height={"20px"} />
                    <Button handleClick={handleLogin} text={"Login"} />
                </form>
            </div>
        </div>
    );
}

export default Login