import styles from '@/components/Navbar/Logo/Logo.module.scss';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'} className={styles.logo}>
            <p>Bruno
                <span className={styles.arrm}>Arrm</span>
                <span className={styles.dot}>.</span>
            </p>
        </Link>
    )
}

export default Logo;