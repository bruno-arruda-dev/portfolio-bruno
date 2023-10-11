import {useState, useContext, useEffect} from 'react';
import styles from '@/components/LanguageSwitch/LanguageSwitch.module.scss';
import { LangContext } from '@/context/LangContext';

const LanguageSwitch = () => {
    const {lang, handleSwitchLang} = useContext(LangContext);

    const [animationKey, setAnimationKey] = useState(0);
    const [inputChecked, setInputChecked] = useState(false);
    const [isChecked, setIsChecked] = useState('isNotChecked');

    const handleCheckboxChange = () => {
        isChecked === 'isChecked' ? setIsChecked('isNotChecked') : setIsChecked('isChecked');
        setInputChecked(!inputChecked);
    };

    useEffect(() => {
        setAnimationKey(animationKey + 1);
    }, [isChecked]);

    const handleChangeLanguage = () => {
        handleSwitchLang();

        setTimeout(()=> {
            handleCheckboxChange();
        }, 1000)
    }

    return (
        <div onClick={handleChangeLanguage} className={`${styles['languageSwitch']} ${styles[lang]} ${isChecked && styles[isChecked]}`} />
    );
};

export default LanguageSwitch;