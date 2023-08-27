import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/components/EmailForm/EmailForm.module.scss';
import Notification from '@/components/Notifications/Notification';

interface Campos {
    nome: string;
    email: string;
    mensagem: string;
}

const EmailForm = () => {
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

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Impede a recarga da página

        if (campos.email === "" || campos.mensagem === "" || campos.nome === "") {
            event.preventDefault();
            setIsVisible('fail');
        } else {
            setIsVisible('success');
            setCampos({
                nome: '',
                email: '',
                mensagem: '',
            });
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
                        <label htmlFor="email">Telefone ou email</label>
                        <input type="text" id="email" name="email" placeholder="Qual é o seu telefone ou email?" onChange={handleInputChange} />
                        <div className={styles.line} />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="...e o seu nome?" onChange={handleInputChange} />
                        <div className={styles.line} />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="mensagem" placeholder="Deixe sua mensagem!" className="textArea" onChange={handleInputChange}></textarea>
                        <div className={styles.line} />
                    </div>

                    <input type="submit" value="Enviar" onClick={() => handleSubmit} />
                </form>
            </div>

        </>
    )
}

export default EmailForm;
