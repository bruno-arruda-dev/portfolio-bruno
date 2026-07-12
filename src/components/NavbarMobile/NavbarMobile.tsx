import { useState, useEffect, useContext } from 'react';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import styles from './NavbarMobile.module.scss';
import Button from '../Navbar/Buttons/Button/Button';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';

const NavbarMobile = () => {
    const { lang } = useContext(LangContext);
    const l = LANGS[lang];
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
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_path} href='#about' active={activeSection === 'about'} /></div>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_project} href='#projects' active={activeSection === 'projects'} /></div>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_contact} href='#contact' active={activeSection === 'contact'} /></div>
                    </div>
                    
                    <SocialMediaButtons />

                </div>


            </header>
        </>
    );
};

export default NavbarMobile;