import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/components/EmailForm/EmailForm.module.scss';
import Notification from '@/components/EmailForm/Notification/Notification';

interface Campos {
    nome: string;
    email: string;
    mensagem: string;
}

const EmailForm = () => {
    const [isVisible, setIsVisible] = useState('isVisible');

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
        event.preventDefault();
        console.log(campos);
        setIsVisible('isNotVisible');
    }

    return (
        <>
            <Notification isVisible={isVisible} type='success' text='Email enviado' />
            <form className={styles.emailForm} onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" placeholder="E-mail de destino.." onChange={handleInputChange} />

                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." onChange={handleInputChange} />

                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" onChange={handleInputChange}></textarea>

                <input type="submit" value="Enviar" onClick={() => handleSubmit} />
            </form>
        </>
    )
}

export default EmailForm;
