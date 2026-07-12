import { useState, useEffect } from 'react';
import styles from '@/styles/Contact.module.scss';
import EmailForm from '@/components/EmailForm/EmailForm';
import { TypeAnimation } from 'react-type-animation';
import SocialMediaButtons from '@/components/SocialMediaButtons/SocialMediaButtons';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const ContactSection = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const { t } = useTranslation('common');
    const router = useRouter();
    const lang = router.locale || 'pt';

    useEffect(() => {
        setAnimationKey((prev) => prev + 1);
    }, [lang]);

    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.sectionTitle}>{t('page_hireme_title')}</h2>

            <div className={styles.contactContainer}>
                <div className={styles.hireMessageContainer}>
                    <TypeAnimation
                        key={animationKey}
                        sequence={[
                            t('writer_contact'), 500,
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
