
import Layout from '@/components/Layout/Layout';
import LeftMainPage from '@/components/LeftMainPage/LeftMainPage';
import RightMainPage from '@/components/RightMainPage/RightMainPage';
import styles from '@/styles/index.module.scss';

const index = () => {
    return (
        <Layout>
            <main className={styles.index}>
                <LeftMainPage />
                <RightMainPage />
            </main>
        </Layout>
    )
}

export default index;