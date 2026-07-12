import { useState, useEffect } from 'react';
import styles from '@/components/LanguageSwitch/LanguageSwitch.module.scss';
import { useRouter } from 'next/router';

const LanguageSwitch = () => {
    const router = useRouter();
    const lang = router.locale || 'pt';

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
        const nextLocale = lang === 'pt' ? 'en' : 'pt';
        router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: nextLocale });

        setTimeout(()=> {
            handleCheckboxChange();
        }, 1000)
    }

    return (
        <div className={styles.languageSwitch} onClick={handleChangeLanguage}>
            <div className={`${styles['languageFlag']} ${styles[lang]} ${isChecked && styles[isChecked]}`} />
        </div>
    );
};

export default LanguageSwitch;