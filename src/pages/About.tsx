import styles from '@/styles/About.module.scss';
import Layout from "@/components/Layout/Layout";
import TimeEvent from '@/components/TimeEvent/TimeEvent';

const About = () => {
    return (
        <Layout title='Bruno Arruda: Sobre mim'>
            <main className={styles.about}>
                <div className={styles.timeline_container}>

                    <div className={styles.timeline} />

                    <TimeEvent
                        type='study'
                        title='Universidade Paulista - UNIP'
                        period='2020 até os dias atuais'
                        descriptions={['Análise e Desenvolvimento de Sistemas.',
                            'Formaçao prevista para Dez. 2023.']}
                    />

                    <TimeEvent
                        type='work'
                        title='Secretaria de Estado de Indústria, Comércio e Serviços'
                        period='2023 até os dias atuais'
                        descriptions={['Desenvolvedor Frontend', 'Chefia de Gabinete', 'Colaboro para a manutenção do portal oficial: industriaecomercio.go.gov.br/']}
                    />

                    <TimeEvent
                        type='study'
                        title='Alura'
                        period='Jan. 2023 até os dias atuais'
                        descriptions={['Formação em Next', 'Formação em Scrum', 'Formação em TypeScript',]}
                    />

                    <TimeEvent
                        type='work'
                        title='Integra Engenharia de Sistemas'
                        period='Nov. 2021 até Ago. 2023'
                        descriptions={['Técnico em Implantação de Sistemas',
                            'Fornecia os treinamentos necessários aos clientes que contratavam o sistema ERP desenvolvido na empresa.',
                            'Entender as necessidades dos clientes era o maior desafio.',
                            'Manipulação de banco de dados Firebird.']}
                    />

                    <TimeEvent
                        type='study'
                        title='DevMedia'
                        period='Jan. 2022 até os dias atuais'
                        descriptions={['Formação em React.',
                            'Formação em JavaScript.', 'Formação em Lógica e Algorítmos.',
                            'Formação em HTML.',
                            'Formação em CSS',]}
                    />

                </div>
            </main>
        </Layout>
    )
}

export default About;