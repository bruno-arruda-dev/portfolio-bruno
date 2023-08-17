'use client'
import styles from '@/components/LeftMainPage/LeftMainPage.module.scss';
import { TypeAnimation } from 'react-type-animation';

const LeftMainPage = () => {

    return (
        <div className={styles.left_main_page}>
            <div className={styles.content}>
                <h1>Olá, meu nome é Bruno</h1>
            <TypeAnimation
                sequence={[
                    'Acredito que com amor', 1000,
                    'Acredito que com dedicação', 1000,
                    'Acredito que com disciplina', 1000,
                    'Acredito que com resiliência', 1000,
                    'Acredito que com foco', 1000,
                    'Acredito que é possível programar grandes mudanças na vida das pessoas!'
                ]}
                wrapper="p"
                speed={50}
                style={{ display: 'block' }}
                repeat={0}
                cursor={true}
            />
            </div>
        </div>
    );
};

export default LeftMainPage;