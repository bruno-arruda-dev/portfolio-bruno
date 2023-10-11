import { useLayoutEffect, useRef } from 'react';
import styles from '@/components/RightMainPage/RightMainPage.module.scss';
import {gsap} from 'gsap';

const RightMainPage = () => {
    const thisImageContainer = useRef(null);

    useLayoutEffect(() => {
        
        // gsap.set(thisImageContainer.current, {scale: 0.7});
        gsap.timeline().from(thisImageContainer.current, {duration: 0.5, delay:2, opacity: 0, yPercent: 100, ease: 'back'});

    }, [])


    return(
        <div className={styles.right_main_page} ref={thisImageContainer}>
            <div className={styles.image_container} />
        </div>
    )
}

export default RightMainPage;