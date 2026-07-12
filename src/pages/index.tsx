import Layout from '@/components/Layout/Layout';
import LeftMainPage from '@/components/LeftMainPage/LeftMainPage';
import RightMainPage from '@/components/RightMainPage/RightMainPage';
import AboutSection from '@/components/AboutSection/AboutSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from '@/styles/index.module.scss';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';

const index = () => {
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  };
}

export default index;