import styles from '@/components/LeftMainPage/HireButtons/SocialMediaButtons/SocialMediaButtons.module.scss';
import {BsWhatsapp} from 'react-icons/bs';
import {FiLinkedin, FiGithub} from 'react-icons/fi';

const SocialMediaButtons = () => {

    return (
        <div className={styles.socialMediaButtons}>
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

export default SocialMediaButtons;