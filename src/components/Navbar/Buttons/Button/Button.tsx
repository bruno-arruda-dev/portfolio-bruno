import {useRef, useLayoutEffect} from 'react';
import Link from 'next/link';
import styles from '@/components/Navbar/Buttons/Button/Button.module.scss';
import {gsap} from 'gsap';

interface IButtonProps {
    href: string;
    text: string;
}

const Button = ({ href, text }: IButtonProps) => {
    const thisButton = useRef(null);

    useLayoutEffect(() => {
        gsap.from(thisButton.current, {delay: 1.5, duration: .5, opacity: 0, xPercent: 200, ease: 'back'})
    }, [])

    return (
        <div className={styles.button} ref={thisButton}>

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