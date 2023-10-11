import { useState, useContext } from 'react';
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
                        <div onClick={handleShowMobileMenu}><Button text='Home' href='/' /></div>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_path} href='/About' /></div>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_project} href='/Projects' /></div>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_contact} href='/Contact' /></div>
                    </div>
                    
                    <SocialMediaButtons />

                </div>


            </header>
        </>
    );
};

export default NavbarMobile;