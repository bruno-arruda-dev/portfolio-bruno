import {useContext} from 'react';
import styles from '@/components/LeftMainPage/HireButtons/Hire.module.scss';
import SocialMediaButtons from '../../SocialMediaButtons/SocialMediaButtons';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const Hire = () => {
    const {lang} = useContext(LangContext);
    const l = LANGS[lang];

    return (
        <div className={styles.hireContainer}>
            <a className={styles.hire} href='/About'>
                <p>{l.btn_path}</p>
            </a>
            <SocialMediaButtons />
        </div>
    );
}

export default Hire;