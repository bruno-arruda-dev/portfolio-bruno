import styles from '@/components/TimeEvent/TimeEvent.module.scss';
import { ITimeEventProps } from '@/types/TimeEventProps';
import { GiWhiteBook } from 'react-icons/gi';
import { BsFillHouseGearFill } from 'react-icons/bs';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const TimeEvent = ({ type, title, period, descriptions }: ITimeEventProps) => {
    const thisEvent = useRef(null);

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(thisEvent.current, {
            opacity: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
                trigger: thisEvent.current,
                // markers: true,
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(thisEvent.current)
        }

    }, [])

    return (
        <div className={`${styles['eventContainer']} ${styles['eventContainer_' + type]}`} ref={thisEvent}>
            <div className={styles.studyInfo}>
                <h2>{title}</h2>
                <p>{period}</p>
                <ul>
                    {descriptions?.map((description, index)=>(
                        <li>{description}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.iconContainer}>
                {type === 'study'? <GiWhiteBook /> : <BsFillHouseGearFill />} 
            </div>
            <div className={styles.workInfo}>
                <h2>{title}</h2>
                <p>{period}</p>
                <ul>
                    {descriptions?.map((description, index)=>(
                        <li>{description}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TimeEvent;