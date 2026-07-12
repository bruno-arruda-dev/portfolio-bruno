import styles from '@/styles/About.module.scss';
import TimeEvent from '@/components/TimeEvent/TimeEvent';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
    const { t } = useTranslation('common');

    return (
        <section id="about" className={styles.about}>
            <h2 className={styles.sectionTitle}>{t('page_about_title')}</h2>
            <div className={styles.timeline_container}>

                <div className={styles.timeline} />

                <TimeEvent
                    type='work'
                    title={t('path_1_title')}
                    period={t('path_1_date')}
                    descriptions={[t('path_1_li_1'), t('path_1_li_2')]}
                />

                <TimeEvent
                    type='study'
                    title={t('path_2_title')}
                    period={t('path_2_date')}
                    descriptions={[t('path_2_li_1')]}
                />

                <TimeEvent
                    type='work'
                    title={t('path_3_title')}
                    period={t('path_3_date')}
                    descriptions={[t('path_3_li_1'), t('path_3_li_2'), t('path_3_li_3')]}
                />

                <TimeEvent
                    type='study'
                    title={t('path_4_title')}
                    period={t('path_4_date')}
                    descriptions={[
                        t('path_4_li_1'),
                        t('path_4_li_2'),
                        t('path_4_li_3')
                    ]}
                />

                <TimeEvent
                    type='work'
                    title={t('path_5_title')}
                    period={t('path_5_date')}
                    descriptions={[t('path_5_li_1'),
                    t('path_5_li_2'),
                    t('path_5_li_3'),
                    t('path_5_li_4')
                    ]}
                />

                <TimeEvent
                    type='study'
                    title={t('path_6_title')}
                    period={t('path_6_date')}
                    descriptions={[t('path_6_li_1'),
                    t('path_6_li_2'),
                    t('path_6_li_3'),
                    t('path_6_li_4')
                    ]}
                />

            </div>

            <div className={styles.spacer} />

        </section>
    );
};

export default AboutSection;
