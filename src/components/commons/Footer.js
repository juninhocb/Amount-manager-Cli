import styles from './Footer.module.css';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
function Footer (){
    return (
        <footer className={styles.footer}>
            <ul>
                <li> <span> Carlos jr  </span> &copy; 2023 </li>
                <li className={styles.socialItem}> <FaFacebook /> </li>
                <li className={styles.socialItem}> <FaGithub /> </li>
                <li className={styles.socialItem}> <FaLinkedin /> </li>
            </ul>
        </footer>
    );
}

export default Footer