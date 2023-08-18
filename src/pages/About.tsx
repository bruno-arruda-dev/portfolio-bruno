import styles from '@/styles/About.module.scss';
import Layout from "@/components/Layout/Layout";
import TimeEvent from '@/components/TimeEvent/TimeEvent';

const About = () => {
    return (
        <Layout>
            <main className={styles.about}>
                <div className={styles.timeline_container}>

                    <div className={styles.timeline} />

                    <TimeEvent
                        position='left'
                        title='Teste de Título'
                        period='2020 a 2023'
                        description='Este é um teste de título para testar a funcionalidade de um componente REACT que deverá aparecer em uma timeline genérica.'
                    />

                    <TimeEvent
                        position='right'
                        title='Teste de Título 2'
                        period='2020 a 2023'
                        description='outro teste de títulooooooo'
                    />

                </div>
            </main>
        </Layout>
    )
}

export default About;