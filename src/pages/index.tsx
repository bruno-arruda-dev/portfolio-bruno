import { useContext } from 'react';
import Layout from '@/components/Layout/Layout';
import LeftMainPage from '@/components/LeftMainPage/LeftMainPage';
import RightMainPage from '@/components/RightMainPage/RightMainPage';
import AboutSection from '@/components/AboutSection/AboutSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from '@/styles/index.module.scss';
import LANG from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const index = () => {
    const {lang} = useContext(LangContext);
    const l = LANG[lang];

    return (
        <Layout title="Bruno Arruda | Dev Portfolio">
            <div className={styles.singlePageWrapper}>
                <section id="home" className={styles.heroSection}>
                    <main className={styles.index}>
                        <LeftMainPage />
                        <RightMainPage />
                    </main>
                </section>
                
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </div>
        </Layout>
    )
}

export default index;