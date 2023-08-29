import { useContext } from 'react';
import Layout from '@/components/Layout/Layout';
import LeftMainPage from '@/components/LeftMainPage/LeftMainPage';
import RightMainPage from '@/components/RightMainPage/RightMainPage';
import styles from '@/styles/index.module.scss';
import LANG from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const index = () => {
    const {lang} = useContext(LangContext);
    const l = LANG[lang];

    return (
        <Layout title={l.page_mainPage_title}>
            <main className={styles.index}>
                <LeftMainPage />
                <RightMainPage />
            </main>
        </Layout>
    )
}

export default index;