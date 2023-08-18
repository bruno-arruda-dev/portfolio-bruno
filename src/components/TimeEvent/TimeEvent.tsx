import styles from '@/components/TimeEvent/TimeEvent.module.scss';
import { ITimeEventProps } from '@/types/TimeEventProps';

const TimeEvent = ({ position, title, period, description }: ITimeEventProps) => {

    if (position === 'left') {
        return (
            <div className={styles.timeEvent}>

                <div className={styles.time_event}>

                    <div className={styles.mark} />

                    <div className={`${styles['content']} ${styles['left']}`}>
                        <h4>{title}</h4>
                        <p>{period}</p>
                    </div>

                    <div className={`${styles['content']} ${styles['right']}`}>
                        <p>{description}</p>
                    </div>

                </div>

            </div>
        )

    } else {
        return (
            <div className={styles.timeEvent}>

                <div className={styles.time_event}>

                    <div className={styles.mark} />

                    <div className={`${styles['content']} ${styles['left']}`}>
                        <p>{description}</p>
                    </div>

                    <div className={`${styles['content']} ${styles['right']}`}>
                        <h4>{title}</h4>
                        <p>{period}</p>
                    </div>

                </div>

            </div>

        )
    }
}

export default TimeEvent;