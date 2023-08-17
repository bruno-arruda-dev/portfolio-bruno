import styles from '@/components/Navbar/Buttons/Buttons.module.scss';
import Button from './Button/Button';

const Buttons = () => {
    return (
        <nav className={styles.buttons}>
            <Button text='Sobre' href='/About' />
            <Button text='Projetos' href='/Projects' />
            <Button text='Contato' href='/Contact' />
        </nav>
    )
}

export default Buttons;