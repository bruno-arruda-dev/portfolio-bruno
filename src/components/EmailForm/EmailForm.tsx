import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/components/EmailForm/EmailForm.module.scss';
import Notification from '@/components/Notifications/Notification';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface Campos {
    nome: string;
    email: string;
    mensagem: string;
}

const EmailForm = () => {
    const { t } = useTranslation('common');
    const URL: string = 'https://sendmail-kappa.vercel.app/sendmail';
    const [isVisible, setIsVisible] = useState('isNotVisible');
    const [isSending, setIsSending] = useState(false);

    const [campos, setCampos] = useState<Campos>({
        nome: '',
        email: '',
        mensagem: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setCampos(prevCampos => ({
            ...prevCampos,
            [name]: value
        }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Impede a recarga da página

        if (campos.email === "" || campos.mensagem === "" || campos.nome === "") {
            setIsVisible('fail');
        } else {
            setIsSending(true);
            try {
                const response = await axios.post(URL, {
                    name: campos.nome,
                    contact: campos.email,
                    message: campos.mensagem,
                });

                if (response.status === 200) {
                    setIsVisible('success');
                } else {
                    setIsVisible('fail');
                }
            } catch (error) {
                console.error('Erro ao enviar requisição:', error);
                setIsVisible('fail');
            } finally {
                setIsSending(false);
            }
        }

        setTimeout(() => {
            setIsVisible('isNotVisible');
            console.log('Componente de notificação desmontado.')
        }, 5 * 1000);
    }

    return (
        <>
            {isVisible === 'success' && <Notification type='success' text={t('email_send_success')} />}
            {isVisible === 'fail' && <Notification type='fail' text={t('email_send_fail')} />}

            <div className={styles.emailForm}>
                <form className={styles.formContainer} onSubmit={handleSubmit}>

                    <div className={styles.inputContainer}>
                        <label htmlFor="nome">{t('email_form_input_name')}</label>
                        <input type="text" id="nome" name="nome" placeholder={t('email_form_placeholder_name')} onChange={handleInputChange} disabled={isSending} />
                        <div className={styles.line} />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">{t('email_form_input_contact')}</label>
                        <input type="text" id="email" name="email" placeholder={t('email_form_placeholder_contact')} onChange={handleInputChange} disabled={isSending} />
                        <div className={styles.line} />
                    </div>
                    
                    <div className={styles.inputContainer}>
                        <label htmlFor="mensagem">{t('email_form_input_message')}</label>
                        <textarea id="mensagem" name="mensagem" placeholder={t('email_form_placeholder_message')} className="textArea" onChange={handleInputChange} disabled={isSending}></textarea>
                        <div className={styles.line} />
                    </div>

                    <input type="submit" value={isSending ? t('btn_sending') : t('btn_send')} disabled={isSending} style={{ cursor: isSending ? 'not-allowed' : 'pointer', opacity: isSending ? 0.7 : 1 }} />
                </form>
            </div>
        </>
    );
};

export default EmailForm;