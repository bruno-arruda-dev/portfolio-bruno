import { useState, useEffect, useContext } from 'react';
import styles from '@/components/Navbar/Buttons/Buttons.module.scss';
import Button from './Button/Button';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const Buttons = () => {
    const {lang} = useContext(LangContext);
    const l = LANGS[lang];

    return (
        <>
            <nav className={`${styles['buttons']}`}>
                <Button text={l.btn_path} href='/About' />
                <Button text={l.btn_project} href='/Projects' />
                <Button text={l.btn_contact} href='/Contact' />
            </nav>

            <LanguageSwitch />
            
        </>
    );
};

export default Buttons;