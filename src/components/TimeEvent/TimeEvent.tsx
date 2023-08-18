import styles from '@/components/TimeEvent/TimeEvent.module.scss';
import { ITimeEventProps } from '@/types/TimeEventProps';
import { BiSolidBook } from 'react-icons/bi';
import { PiGearSixFill } from 'react-icons/pi';

const TimeEvent = ({ type, title, period, descriptions }: ITimeEventProps) => {

    if (type === 'learn') {
        return (

            <div className={`${styles[`timeEvent_left`]}`}>

                <div className={styles.time_event}>

                    <div className={styles.mark}><BiSolidBook /></div>

                    <div className={`${styles['content']} ${styles['left']}`}>
                        <h4>{title}</h4>
                        <p className={styles.period}>{period}</p>
                    </div>

                    <div className={`${styles['content']} ${styles['right']}`}>
                        {descriptions}
                    </div>
                </div>

            </div>
        )

    } else {
        return (

            <div className={`${styles[`timeEvent_right`]}`}>

                <div className={styles.time_event}>

                    <div className={styles.mark}><PiGearSixFill /></div>

                    <div className={`${styles['content']} ${styles['right']}`}>
                        {descriptions}
                    </div>

                    <div className={`${styles['content']} ${styles['left']}`}>
                        <h4>{title}</h4>
                        <p className={styles.period}>{period}</p>
                    </div>
                </div>

            </div>

        )
    }
}

export default TimeEvent;