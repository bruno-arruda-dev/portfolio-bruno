import styles from '@/styles/About.module.scss';
import Layout from "@/components/Layout/Layout";
import TimeEvent from '@/components/TimeEvent/TimeEvent';
import ProjectModal from '@/components/ProjectModal/ProjectModal';

const About = () => {
    return (
        <Layout>
            <main className={styles.about}>
                <div className={styles.timeline_container}>

                    <div className={styles.timeline} />

                    <TimeEvent
                        type='learn'
                        title='Alura'
                        period='2023 até os dias atuais'
                        descriptions='Cursos de Next, Scrum, TypeScript e outros foram realizados na plataforma.'
                    />

                    <TimeEvent
                        title='Secretaria da Indústria e Comércio'
                        period='2023 até os dias atuais'
                        descriptions='Colaborador responsável por auxiliar na atualizaçao do portal.'
                    />

                    <TimeEvent
                        type='learn'
                        title='Devmedia'
                        period='2023 até os dias atuais'
                        descriptions='Um monte de curso com diplima.'
                    />

                    <TimeEvent
                        title='Teste de emprego'
                        period='2022 a 2023'
                        descriptions='Teste de componente do tipo emprego.'
                    />

                    <TimeEvent
                        type='learn'
                        title='Udemy'
                        period='2020 a 2023'
                        descriptions='Teste de componente do tipo estudos.'
                    />

                </div>
            </main>
        </Layout>
    )
}

export default About;