import {useState, useContext} from 'react';
import styles from '@/components/LanguageSwitch/LanguageSwitch.module.scss';
import { LangContext } from '@/context/LangContext';

interface LanguageSwitch {
    isChecked?: string,
    handleChecked: () => void,
}

const LanguageSwitch = ({isChecked, handleChecked}: LanguageSwitch) => {
    const {lang, handleSwitchLang} = useContext(LangContext)

    const handleChangeLanguage = () => {
        handleSwitchLang();

        setTimeout(()=> {
            handleChecked();
        }, 1000)
    }

    return (
        <div onClick={handleChangeLanguage} className={`${styles['languageSwitch']} ${styles[lang]} ${isChecked && styles[isChecked]}`} />
    );
};

export default LanguageSwitch;