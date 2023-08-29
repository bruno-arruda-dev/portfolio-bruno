import {useContext} from 'react';
import styles from '@/components/Navbar/Navbar.module.scss';
import Logo from '@/components/Navbar/Logo/Logo';
import Buttons from '@/components/Navbar/Buttons/Buttons';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Logo />
            <Buttons />
        </div>
    )
}

export default Navbar;