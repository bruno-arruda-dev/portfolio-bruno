import styles from '@/styles/About.module.scss';
import Layout from "@/components/Layout/Layout";
import TimeEvent from '@/components/TimeEvent/TimeEvent';
import ProjectModal from '@/components/ProjectModal/ProjectModal';

const About = () => {
    return (
        <Layout title='Bruno Arruda: Sobre mim'>
            <main className={styles.about}>
                <div className={styles.timeline_container}>

                    <div className={styles.timeline} />

                    <TimeEvent
                        type='study'
                        title='Alura'
                        period='2023 até os dias atuais'
                        descriptions={['Opção de estudo 1', 'Opção de estudo 2']}
                    />

                    <TimeEvent
                        type='work'
                        title='Alura'
                        period='2023 até os dias atuais'
                        descriptions={['Opção de trabalho 1', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2']}
                    />

                    <TimeEvent
                        type='work'
                        title='Alura'
                        period='2023 até os dias atuais'
                        descriptions={['Opção de trabalho 1', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2']}
                    />

                    <TimeEvent
                        type='study'
                        title='Alura'
                        period='2023 até os dias atuais'
                        descriptions={['Opção de trabalho 1', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2']}
                    />

                    <TimeEvent
                        type='work'
                        title='Alura'
                        period='2023 até os dias atuais'
                        descriptions={['Opção de trabalho 1', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2', 'Opção de trabalho 2']}
                    />

                </div>
            </main>
        </Layout>
    )
}

export default About;