import { useRef, useEffect } from 'react';
import styles from '@/components/LeftMainPage/HireButtons/Hire.module.scss';
import SocialMediaButtons from '../../SocialMediaButtons/SocialMediaButtons';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

const Hire = () => {
    const { t } = useTranslation('common');
    const thisHire = useRef(null);

    useEffect(() => {
        gsap.timeline()
            .from(thisHire.current, { delay: 2, scale: 0, duration: 2, ease: 'back' })
            .from('.curricullum', { scale: 0, duration: .3, ease: 'back' })
            .from('.linkedin', { scale: 0, duration: .3, ease: 'back' })
            .from('.github', { scale: 0, duration: .3, ease: 'back' })
            .from('.whatsapp', { scale: 0, duration: .3, ease: 'back' })
    }, [])

    return (
        <div className={styles.hireContainer}>
            <a className={styles.hire} href='#about' ref={thisHire}>
                <p>{t('btn_path')}</p>
            </a>
            <SocialMediaButtons />
        </div>
    );
}

export default Hire;