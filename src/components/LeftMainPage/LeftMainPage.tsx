import styles from '@/components/LeftMainPage/LeftMainPage.module.scss';
import { TypeAnimation } from 'react-type-animation';
import Hire from './HireButtons/Hire';

const LeftMainPage = () => {
    function calcularIdade(dataNascimento: Date): number {
        const hoje = new Date();
        const idade = hoje.getFullYear() - dataNascimento.getFullYear();

        // Calcular minha idade
        if (
            hoje.getMonth() < dataNascimento.getMonth() ||
            (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())
        ) {
            return idade - 1;
        }

        return idade;
    }

    const dataNascimento = new Date('1989-02-16');
    const idade = calcularIdade(dataNascimento);


    return (
        <div className={styles.left_main_page}>

            <div className={styles.content}>

                <h1>Olá, meu nome é Bruno</h1>

                <TypeAnimation
                    className={styles.writer}
                    sequence={[
                        `Brasileiro, moro em Goiânia. Hoje aos ${idade} anos, sou apaixonado por desenvolvimento web. Em meus projetos gosto de utilizar NextJS, TypeScript e SASS, sempre curioso com novas tecnologias.\n\nAcredito que com foco...`, 100,
                        `Brasileiro, moro em Goiânia. Hoje aos ${idade} anos, sou apaixonado por desenvolvimento web. Em meus projetos gosto de utilizar NextJS, TypeScript e SASS, sempre curioso com novas tecnologias.\n\nAcredito que com resiliência...`, 1000,
                        `Brasileiro, moro em Goiânia. Hoje aos ${idade} anos, sou apaixonado por desenvolvimento web. Em meus projetos gosto de utilizar NextJS, TypeScript e SASS, sempre curioso com novas tecnologias.\n\nAcredito que com disciplina...`, 1500,
                        `Brasileiro, moro em Goiânia. Hoje aos ${idade} anos, sou apaixonado por desenvolvimento web. Em meus projetos gosto de utilizar NextJS, TypeScript e SASS, sempre curioso com novas tecnologias.\n\nAcredito que é possível programar grandes mudanças na vida das pessoas!`
                    ]}
                    wrapper="p"
                    speed={90}
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