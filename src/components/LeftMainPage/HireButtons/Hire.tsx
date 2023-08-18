import styles from '@/components/LeftMainPage/HireButtons/Hire.module.scss';
import {BsWhatsapp} from 'react-icons/bs';
import {FiLinkedin, FiGithub} from 'react-icons/fi';

const Hire = () => {

    return (
        <div className={styles.hireContainer}>
            <a className={styles.hire} href='/About'>
                <p>Conheça-me</p>
            </a>
            <a className={styles.social} href='www.google.com' target='_blank' rel='noopener noreferer'>
                <BsWhatsapp />
            </a>
            <a className={styles.social} href='www.google.com' target='_blank' rel='noopener noreferer'>
                <FiLinkedin />
            </a>
            <a className={styles.social} href='www.google.com' target='_blank' rel='noopener noreferer'>
                <FiGithub />
            </a>
        </div>
    );
}

export default Hire;