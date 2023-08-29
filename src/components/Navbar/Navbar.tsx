import styles from '@/components/Navbar/Navbar.module.scss';
import Logo from '@/components/Navbar/Logo/Logo'
import Buttons from '@/components/Navbar/Buttons/Buttons';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Logo />
            <Buttons />
            <LanguageSwitch />
        </div>
    )
}

export default Navbar;