import styles from '@/styles/Contact.module.scss';
import Layout from "@/components/Layout/Layout";
import EmailForm from '@/components/EmailForm/EmailForm';
import { TypeAnimation } from 'react-type-animation';
import SocialMediaButtons from '@/components/LeftMainPage/HireButtons/SocialMediaButtons/SocialMediaButtons';

const Contact = () => {
    return (
        <Layout title='Bruno Arruda: Me contrate'>
            <main className={styles.contact}>
                <div className={styles.contactContainer}>
                    <TypeAnimation
                        sequence={[
                            'Por favor, entre em contato caso queira me contratar, ou dar sugestões. \n Muito Obrigado!', 500,
                        ]}
                        wrapper="p"
                        speed={50}
                        style={{ display: 'block' }}
                        repeat={0}
                        cursor={true}
                    />
                    <SocialMediaButtons />
                </div>
                <EmailForm />
            </main>
        </Layout>
    )
}

export default Contact;