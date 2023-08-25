import styles from '@/components/LeftMainPage/HireButtons/Hire.module.scss';
import SocialMediaButtons from './SocialMediaButtons/SocialMediaButtons';

const Hire = () => {

    return (
        <div className={styles.hireContainer}>
            <a className={styles.hire} href='/About'>
                <p>Trajetória</p>
            </a>
            <SocialMediaButtons />
        </div>
    );
}

export default Hire;