import { useContext } from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/components/EmailForm/EmailForm.module.scss';
import Notification from '@/components/Notifications/Notification';
import axios from 'axios';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

interface Campos {
    nome: string;
    email: string;
    mensagem: string;
}

const EmailForm = () => {
    const {lang} = useContext(LangContext);
    const l = LANGS[lang];
    const URL: string = 'https://sendmail-kappa.vercel.app/sendmail';
    const [isVisible, setIsVisible] = useState('isNotVisible');

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
            event.preventDefault();
            setIsVisible('fail');
        } else {
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
            }
        }

        setTimeout(() => {
            setIsVisible('isNotVisible');
            console.log('Componente de notificação desmontado.')
        }, 5 * 1000);
    }

    return (
        <>
            {isVisible === 'success' && <Notification type='success' text='Email enviado com sucesso.' />}
            {isVisible === 'fail' && <Notification type='fail' text='Email não foi enviado. Verifique os campos!' />}

            <div className={styles.emailForm}>
                <form className={styles.formContainer} onSubmit={handleSubmit}>

                    <div className={styles.inputContainer}>
                        <label htmlFor="nome">{l.email_form_input_name}</label>
                        <input type="text" id="nome" name="nome" placeholder={l.email_form_placeholder_name} onChange={handleInputChange} />
                        <div className={styles.line} />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">{l.email_form_input_contact}</label>
                        <input type="text" id="email" name="email" placeholder={l.email_form_input_contact} onChange={handleInputChange} />
                        <div className={styles.line} />
                    </div>
                    
                    <div className={styles.inputContainer}>
                        <label htmlFor="mensagem">{l.email_form_input_message}</label>
                        <textarea id="mensagem" name="mensagem" placeholder={l.email_form_placeholder_message} className="textArea" onChange={handleInputChange}></textarea>
                        <div className={styles.line} />
                    </div>

                    <input type="submit" value={l.btn_send} onClick={() => handleSubmit} />
                </form>
            </div>
        </>
    );
};

export default EmailForm;