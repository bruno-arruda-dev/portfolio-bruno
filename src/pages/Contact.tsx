import styles from '@/styles/Contact.module.scss';
import Layout from "@/components/Layout/Layout";
import EmailForm from '@/components/EmailForm/EmailForm';

const Contact = () => {
    return(
        <Layout title='Bruno Arruda: Me contrate'>
                <main className={styles.contact}>
                <EmailForm />
            </main>
        </Layout>
    )
}

export default Contact;