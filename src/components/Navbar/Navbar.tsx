import styles from '@/components/Navbar/Navbar.module.scss';
import Logo from '@/components/Navbar/Logo/Logo';
import Buttons from '@/components/Navbar/Buttons/Buttons';

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <Logo />
            <Buttons />
        </header>
    )
}

export default Navbar;