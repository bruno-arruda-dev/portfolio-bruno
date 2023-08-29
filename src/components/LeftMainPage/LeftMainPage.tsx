import {useState, useEffect, useContext} from 'react';
import styles from '@/components/LeftMainPage/LeftMainPage.module.scss';
import { TypeAnimation } from 'react-type-animation';
import Hire from './HireButtons/Hire';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const LeftMainPage = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const {lang} = useContext(LangContext);
    const l = LANGS[lang];
    function calcularIdade(dataNascimento: Date): number {
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();

        // Age calculator
        if (
            hoje.getMonth() < dataNascimento.getMonth() ||
            (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())
        ) {
            return idade - 1;
        }

        return idade;
    }


    useEffect(() => {
        setAnimationKey(animationKey + 1);
    }, [lang]);

    const dataNascimento = new Date('1989-02-16');
    const idade = calcularIdade(dataNascimento);


    return (
        <div className={styles.left_main_page}>

            <div className={styles.content}>

                <h1>{`${l.greeting} ${idade}`}</h1>

                <TypeAnimation
                    key={animationKey}
                    className={styles.writer}
                    sequence={[
                        l.writer_focus, 1500,
                        l.writer_resilience, 1500,
                        l.writer_discipline, 1500,
                        l.writer_is_possible
                    ]}
                    wrapper="p"
                    speed={80}
                    style={{whiteSpace: 'pre-line', display: 'block' }}
                    repeat={0}
                    cursor={true}
                />

                <Hire />

            </div>

        </div>
    );
};

export default LeftMainPage;