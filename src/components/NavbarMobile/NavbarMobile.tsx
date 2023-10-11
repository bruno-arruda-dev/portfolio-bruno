import { useEffect, useState, useContext } from 'react';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import styles from './NavbarMobile.module.scss';
import Button from '../Navbar/Buttons/Button/Button';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';
import Hire from '../LeftMainPage/HireButtons/Hire';

const NavbarMobile = () => {
    const { lang } = useContext(LangContext);
    const l = LANGS[lang];
    const [inputChecked, setInputChecked] = useState(false);
    const [mobileMenu, setMobileMenu] = useState('hidden');

    const handleShowMobileMenu = () => {
        mobileMenu === 'hidden' ? setMobileMenu('exposed') : setMobileMenu('hidden');
    }

    return (
        <>
            <header className={`${styles['navbarMobile']}`}>
                <div className={`${styles['sandwitchContainer']}`} onClick={handleShowMobileMenu}>
                    <div className={`${styles['trace']} ${styles['top']}`} />
                    <div className={`${styles['trace']} ${styles['mid']}`} />
                    <div className={`${styles['trace']} ${styles['bottom']}`} />
                </div>

                <LanguageSwitch />

                <div className={`${styles['mobileMenu']} ${styles[mobileMenu]}`}>

                    <div className={styles.mobileButtons}>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_path} href='/About' /></div>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_project} href='/Projects' /></div>
                        <div onClick={handleShowMobileMenu}><Button text={l.btn_contact} href='/Contact' /></div>
                    </div>
                    
                    <Hire />

                </div>


            </header>
        </>
    );
};

export default NavbarMobile;