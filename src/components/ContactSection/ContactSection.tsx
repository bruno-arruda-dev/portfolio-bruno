import { useState, useEffect, useContext } from 'react';
import styles from '@/styles/Contact.module.scss';
import EmailForm from '@/components/EmailForm/EmailForm';
import { TypeAnimation } from 'react-type-animation';
import SocialMediaButtons from '@/components/SocialMediaButtons/SocialMediaButtons';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const ContactSection = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const { lang } = useContext(LangContext);
    const l = LANGS[lang];

    useEffect(() => {
        setAnimationKey((prev) => prev + 1);
    }, [lang]);

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.sectionTitle}>{l.page_hireme_title}</h2>

            <div className={styles.contactContainer}>
                <div className={styles.hireMessageContainer}>
                    <TypeAnimation
                        key={animationKey}
                        sequence={[
                            l.writer_contact, 500,
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

        </section>
    );
};

export default ContactSection;
