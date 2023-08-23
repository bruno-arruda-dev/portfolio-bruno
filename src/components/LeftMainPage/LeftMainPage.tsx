import styles from '@/components/LeftMainPage/LeftMainPage.module.scss';
import { TypeAnimation } from 'react-type-animation';
import Hire from './HireButtons/Hire';

const LeftMainPage = () => {

    return (
        <div className={styles.left_main_page}>

            <div className={styles.content}>

                <h1>Olá, meu nome é Bruno</h1>

                <TypeAnimation 
                    className={styles.writer}
                    sequence={[
                        'Acredito que com dedicação...', 1500,
                        'Acredito que com disciplina...', 900,
                        'Acredito que com resiliência...', 1200,
                        'Acredito que é possível programar grandes mudanças na vida das pessoas!'
                    ]}
                    wrapper="p"
                    speed={50}
                    style={{ display: 'block' }}
                    repeat={0}
                    cursor={true}
                />

                <Hire />

            </div>

        </div>
    );
};

export default LeftMainPage;