
import LeftMainPage from '@/components/LeftMainPage/LeftMainPage';
import RightMainPage from '@/components/RightMainPage/RightMainPage';
import styles from '@/pages/Main/Main.module.scss';

const Main = () => {
    return (
        <div className={styles.main}>
           <LeftMainPage />
           <RightMainPage />
        </div>
    )
}

export default Main;