import styles from './NavBar.module.css';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
function NavBar({setLogin}){
    function handleExit(){
        setLogin(true);
    }
    return (
        <nav className={styles.navbar}>
            <ul>
                <img src={logo} alt="logo" width="80px" height="80px" />
                <li> <Link className={styles.linkStyle} to={"/home"}> Home </Link> </li>
                <li> <Link className={styles.linkStyle} to={"/new-invoice"}> New Invoice </Link> </li>
                <li> <Link className={styles.linkStyle} to={"/bank-account"}> Bank Account </Link> </li>
                <li> <Link className={styles.linkStyle} to={"/registers"}> Registers </Link> </li>
                <li className={styles.linkStyle} onClick={handleExit}> Exit </li>
            </ul>
        </nav>
    );
}

export default NavBar
