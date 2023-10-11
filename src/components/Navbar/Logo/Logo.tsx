import styles from '@/components/Navbar/Logo/Logo.module.scss';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import {gsap} from 'gsap';

const Logo = () => {
    const thisLogo = useRef(null);

    useLayoutEffect(() => {

        gsap.timeline().from(thisLogo.current, {duration: 0.5, delay:3, opacity: 0, xPercent: -400, ease: 'back'});

    },[])

    return (
        <Link href={'/'} className={styles.logo} ref={thisLogo}>
            <p>Bruno
                <span className={styles.arrm}>Arrm</span>
                <span className={styles.dot}>.</span>
            </p>
        </Link>
    )
}

export default Logo;