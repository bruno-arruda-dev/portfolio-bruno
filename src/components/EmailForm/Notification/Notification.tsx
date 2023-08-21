import styles from '@/components/EmailForm/Notification/Notification.module.scss';
import INotificationProps from '@/types/NotificationProps';

const Notification = ({type, text}: INotificationProps) => {
    return(
        <div className={`${styles['isVisible']} ${styles['notification_' + type]}`}>
            <p>{text}</p>
            <div />
        </div>
    )
}

export default Notification;