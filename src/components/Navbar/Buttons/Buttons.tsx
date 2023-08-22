import React, { useState } from 'react';
import styles from '@/components/Navbar/Buttons/Buttons.module.scss';
import Button from './Button/Button';

const Buttons = () => {
    const [inputChecked, setInputChecked] = useState(false)
    const [isChecked, setIsChecked] = useState('isNotChecked');

    const handleCheckboxChange = () => {
        isChecked === 'isChecked' ? setIsChecked('isNotChecked') : setIsChecked('isChecked');
        setInputChecked(!inputChecked)
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
                <Button text='Sobre' href='/About' />
                <Button text='Projetos' href='/Projects' />
                <Button text='Contato' href='/Contact' />
            </nav>
        </>
    );
};

export default Buttons;
