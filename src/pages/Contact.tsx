import styles from '@/styles/Contact.module.scss';
import Layout from "@/components/Layout/Layout";
import EmailForm from '@/components/EmailForm/EmailForm';
import { TypeAnimation } from 'react-type-animation';
import SocialMediaButtons from '@/components/SocialMediaButtons/SocialMediaButtons';

const Contact = () => {
    return (
        <Layout title='Bruno Arruda: Me contrate'>
            <main className={styles.contact}>

                <div className={styles.contactContainer}>
                    <div className={styles.hireMessageContainer}>
                        <TypeAnimation
                            sequence={[
                                'Se você tem críticas, sugestões, quer me contratar ou trocar uma idéia, por favor, entre em contato!\n\nMuito Obrigado!', 500,
                            ]}
                            wrapper="p"
                            speed={80}
                            style={{ whiteSpace: 'pre-line', display: 'block' }}
                            repeat={0}
                            cursor={true}
                        />

                        <SocialMediaButtons />
                        
                    </div>
                </div>

                <EmailForm />

            </main>
        </Layout>
    )
}

export default Contact;