import { useState, useEffect } from 'react';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import styles from './NavbarMobile.module.scss';
import Button from '../Navbar/Buttons/Button/Button';
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const NavbarMobile = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const lang = router.locale || 'pt';
    const [mobileMenu, setMobileMenu] = useState('hidden');
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'contact'];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: '-30% 0px -60% 0px',
                }
            );
            observer.observe(el);
            return { observer, el };
        });

        return () => {
            observers.forEach((obs) => {
                if (obs) {
                    obs.observer.unobserve(obs.el);
                }
            });
        };
    }, []);

    useEffect(() => {
        if (mobileMenu === 'exposed') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenu]);

    const handleShowMobileMenu = () => {
        mobileMenu === 'hidden' ? setMobileMenu('exposed') : setMobileMenu('hidden');
    }

    return (
        <>
            <header className={`${styles['navbarMobile']}`}>

                <div className={`${styles['sandwitchContainer']}`} onClick={handleShowMobileMenu}>
                    <div className={`${styles['trace']} ${styles['top']} ${styles[mobileMenu]}`} />
                    <div className={`${styles['trace']} ${styles['mid']} ${styles[mobileMenu]}`} />
                    <div className={`${styles['trace']} ${styles['bottom']} ${styles[mobileMenu]}`} />
                </div>

                <LanguageSwitch />

                <div className={`${styles['mobileMenu']} ${styles[mobileMenu]}`}>

                    <div className={styles.mobileButtons}>
                        <div onClick={handleShowMobileMenu}><Button text='Home' href='#home' active={activeSection === 'home'} /></div>
                        <div onClick={handleShowMobileMenu}><Button text={t('btn_path')} href='#about' active={activeSection === 'about'} /></div>
                        <div onClick={handleShowMobileMenu}><Button text={t('btn_project')} href='#projects' active={activeSection === 'projects'} /></div>
                        <div onClick={handleShowMobileMenu}><Button text={t('btn_contact')} href='#contact' active={activeSection === 'contact'} /></div>
                    </div>
                    
                    <SocialMediaButtons />

                </div>


            </header>
        </>
    );
};

export default NavbarMobile;