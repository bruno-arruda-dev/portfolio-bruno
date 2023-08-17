import Link from 'next/link';
import styles from '@/components/Navbar/Buttons/Button/Button.module.scss';

interface IButtonProps {
    href: string;
    text: string;
}

const Button = ({ href, text }: IButtonProps) => {
    return (
        <div className={styles.button}>

        <Link href={href} className={styles.button}>
                <div className={`${styles['trace_container']} ${styles['left']}`}>
                    <div className={`${styles['trace']} ${styles['top_trace']}`} />
                    <div className={`${styles['trace']} ${styles['bot_trace']}`} />
                </div>
                {text}
                <div className={`${styles['trace_container']} ${styles['right']}`}>
                    <div className={`${styles['trace']} ${styles['top_trace']}`} />
                    <div className={`${styles['trace']} ${styles['bot_trace']}`} />
                </div>
        </Link>
        </div>
    );
};

export default Button;