import styles from '@/components/TimeEvent/TimeEvent.module.scss';
import { ITimeEventProps } from '@/types/TimeEventProps';
import { GiWhiteBook } from 'react-icons/gi';
import { BsFillHouseGearFill } from 'react-icons/bs';

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