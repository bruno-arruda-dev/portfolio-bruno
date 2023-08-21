import styles from '@/components/LeftMainPage/HireButtons/Hire.module.scss';
import {BsWhatsapp} from 'react-icons/bs';
import {FiLinkedin, FiGithub} from 'react-icons/fi';
import SocialMediaButtons from './SocialMediaButtons/SocialMediaButtons';

const Hire = () => {

    return (
        <div className={styles.hireContainer}>
            <a className={styles.hire} href='/About'>
                <p>Conheça-me</p>
            </a>
            <SocialMediaButtons />
        </div>
    );
}

export default Hire;