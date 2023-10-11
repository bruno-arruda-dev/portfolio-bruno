import { useContext, useRef, useLayoutEffect } from 'react';
import styles from '@/components/LeftMainPage/HireButtons/Hire.module.scss';
import SocialMediaButtons from '../../SocialMediaButtons/SocialMediaButtons';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';
import { gsap } from 'gsap';

const Hire = () => {
    const { lang } = useContext(LangContext);
    const l = LANGS[lang];
    const thisHire = useRef(null);

    useLayoutEffect(() => {
        gsap.timeline()
            .from(thisHire.current, { delay: 2, scale: 0, duration: 2, ease: 'back' })
            .from('.curricullum', { scale: 0, duration: .3, ease: 'back' })
            .from('.linkedin', { scale: 0, duration: .3, ease: 'back' })
            .from('.github', { scale: 0, duration: .3, ease: 'back' })
            .from('.whatsapp', { scale: 0, duration: .3, ease: 'back' })
    }, [])

    return (
        <div className={styles.hireContainer}>
            <a className={styles.hire} href='/About' ref={thisHire}>
                <p>{l.btn_path}</p>
            </a>
            <SocialMediaButtons />
        </div>
    );
}

export default Hire;