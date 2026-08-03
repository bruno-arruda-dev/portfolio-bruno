import styles from '@/styles/About.module.scss';
import TimeEvent from '@/components/TimeEvent/TimeEvent';
import { useTranslation } from 'react-i18next';

interface IExperienceItem {
    type: 'study' | 'work';
    title: string;
    period: string;
    markdownFile?: string;
    markdownContent?: string;
    descriptions?: string[];
}

const AboutSection = () => {
    const { t } = useTranslation('common');
    const experiences = t('experiences', { returnObjects: true });
    const experiencesList: IExperienceItem[] = Array.isArray(experiences) ? experiences : [];

    return (
        <section id="about" className={styles.about}>
            <h2 className={styles.sectionTitle}>{t('page_about_title')}</h2>
            <div className={styles.timeline_container}>

                <div className={styles.timeline} />

                {experiencesList.map((exp, index) => (
                    <TimeEvent
                        key={index}
                        type={exp.type}
                        title={exp.title}
                        period={exp.period}
                        markdownFile={exp.markdownFile}
                        markdownContent={exp.markdownContent}
                        descriptions={exp.descriptions}
                    />
                ))}

            </div>

            <div className={styles.spacer} />

        </section>
    );
};

export default AboutSection;
