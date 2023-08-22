import styles from '@/components/TimeEvent/TimeEvent.module.scss';
import { ITimeEventProps } from '@/types/TimeEventProps';
import { BiSolidBook } from 'react-icons/bi';
import { PiGearSixFill } from 'react-icons/pi';

const TimeEvent = ({ type, title, period, descriptions }: ITimeEventProps) => {

    return (
        <div className={`${styles['eventContainer']} ${styles['eventContainer_' + type]}`}>
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
                {type === 'study'? <BiSolidBook/> : <PiGearSixFill />} 
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