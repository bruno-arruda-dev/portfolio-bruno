import {useState} from 'react';
import styles from '@/components/LanguageSwitch/LanguageSwitch.module.scss';

const LanguageSwitch = () => {
    const [lang, setLang] = useState('brazil')
    const handleChangeLanguage = () => {
        lang === 'brazil' ? setLang('eua') : setLang('brazil');
    }

    return (
        <div onClick={handleChangeLanguage} className={`${styles['languageSwitch']} ${styles[lang]}`} />
    );
};

export default LanguageSwitch;