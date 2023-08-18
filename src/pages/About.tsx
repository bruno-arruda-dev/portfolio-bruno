import styles from '@/styles/About.module.scss';
import Layout from "@/components/Layout/Layout";

const About = () => {
    return (
        <Layout>
            <main className={styles.about}>
                <div className={styles.timeline_container}>

                    <div className={styles.timeline} />

                    <div className={styles.time_event}>
                        <div className={styles.mark} />
                        <div className={`${styles['content']} ${styles['left']}`}>
                            <h3>Alura</h3>
                        </div>
                        <div className={`${styles['content']} ${styles['right']}`}>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                        </div>
                    </div>
                    <div className={styles.time_event}>
                        <div className={styles.mark} />
                        <div className={`${styles['content']} ${styles['left']}`}>

                        </div>
                        <div className={`${styles['content']} ${styles['right']}`}>
                            <h3>Alura</h3>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                        </div>
                    </div>
                    <div className={styles.time_event}>
                        <div className={styles.mark} />
                        <div className={`${styles['content']} ${styles['left']}`}>

                        </div>
                        <div className={`${styles['content']} ${styles['right']}`}>
                            <h3>Alura</h3>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                        </div>
                    </div>
                    <div className={styles.time_event}>
                        <div className={styles.mark} />
                        <div className={`${styles['content']} ${styles['left']}`}>

                        </div>
                        <div className={`${styles['content']} ${styles['right']}`}>
                            <h3>Alura</h3>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                        </div>
                    </div>
                    <div className={styles.time_event}>
                        <div className={styles.mark} />
                        <div className={`${styles['content']} ${styles['left']}`}>

                        </div>
                        <div className={`${styles['content']} ${styles['right']}`}>
                            <h3>Alura</h3>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                            <p>Cursos de REACT</p>
                        </div>
                    </div>

                </div>
            </main>
        </Layout>
    )
}

export default About;