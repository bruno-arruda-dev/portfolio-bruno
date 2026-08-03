import styles from '@/components/TimeEvent/TimeEvent.module.scss';
import { ITimeEventProps } from '@/types/TimeEventProps';
import { GiWhiteBook } from 'react-icons/gi';
import { BsFillHouseGearFill } from 'react-icons/bs';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';

const TimeEvent = ({ index = 0, type, title, period, descriptions, markdownFile, markdownContent }: ITimeEventProps) => {
    const thisEvent = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(thisEvent.current, {
            opacity: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
                trigger: thisEvent.current,
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(thisEvent.current)
        }

    }, [])

    const hasMarkdown = Boolean(markdownFile || markdownContent);
    const isLeft = index % 2 === 0;

    const renderDetails = () => (
        <>
            <h2>{title}</h2>
            <p>{period}</p>
            {hasMarkdown ? (
                <MarkdownRenderer markdownFile={markdownFile} markdownContent={markdownContent} />
            ) : (
                <ul>
                    {descriptions?.map((description, itemIndex) => (
                        <li key={itemIndex}>{description}</li>
                    ))}
                </ul>
            )}
        </>
    );

    return (
        <div 
            className={`${styles['eventContainer']} ${styles[isLeft ? 'eventContainer_left' : 'eventContainer_right']}`} 
            ref={thisEvent}
        >
            <div className={styles.leftInfo}>
                {renderDetails()}
            </div>
            <div className={styles.iconContainer}>
                {type === 'study' ? <GiWhiteBook /> : <BsFillHouseGearFill />} 
            </div>
            <div className={styles.rightInfo}>
                {renderDetails()}
            </div>
        </div>
    )
}

export default TimeEvent;