import { useState, useContext } from 'react';
import styles from '@/components/Navbar/Buttons/Buttons.module.scss';
import Button from './Button/Button';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const Buttons = () => {
    const {lang} = useContext(LangContext);
    const l = LANGS[lang];
    const [inputChecked, setInputChecked] = useState(false);
    const [isChecked, setIsChecked] = useState('isNotChecked');

    const handleCheckboxChange = () => {
        isChecked === 'isChecked' ? setIsChecked('isNotChecked') : setIsChecked('isChecked');
        setInputChecked(!inputChecked);
    };

    return (
        <>
            <div className={styles.sandwitchContainer}>
                <input className={styles.input} type='checkbox' id='input' checked={inputChecked} onChange={handleCheckboxChange} />
                <label htmlFor='input'>
                    <div className={`${styles['top']} ${styles['trace']}`} />
                    <div className={`${styles['mid']} ${styles['trace']}`} />
                    <div className={`${styles['bottom']} ${styles['trace']}`} />
                </label>
            </div>

            <nav className={`${styles.buttons} ${styles[isChecked]}`}>
                <Button text={l.btn_path} href='/About' />
                <Button text={l.btn_project} href='/Projects' />
                <Button text={l.btn_contact} href='/Contact' />
            </nav>

            <LanguageSwitch isChecked={isChecked}/>
        </>
    );
};

export default Buttons;
