import {useState, useEffect, useRef} from 'react';
import styles from '@/components/LeftMainPage/LeftMainPage.module.scss';
import { TypeAnimation } from 'react-type-animation';
import Hire from './HireButtons/Hire';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import {gsap} from 'gsap';

const LeftMainPage = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const { t } = useTranslation('common');
    const router = useRouter();
    const lang = router.locale || 'pt';
    const thisTitle = useRef(null)


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

    useEffect(() => {
        gsap.from(thisTitle.current, { scale: 0, duration: 1, ease: 'back'})
    }, [])


    return (
        <div className={styles.left_main_page}>

            <div className={styles.content}>

                <h1 ref={thisTitle}>{`${t('greeting')} ${idade}`}</h1>

                <TypeAnimation
                    key={animationKey}
                    className={styles.writer}
                    sequence={[
                        t('writer_focus'), 1500,
                        t('writer_resilience'), 1500,
                        t('writer_discipline'), 1500,
                        t('writer_is_possible')
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