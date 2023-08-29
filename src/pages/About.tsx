import {useContext} from 'react';
import styles from '@/styles/About.module.scss';
import Layout from "@/components/Layout/Layout";
import TimeEvent from '@/components/TimeEvent/TimeEvent';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const About = () => {
    const {lang} = useContext(LangContext);
    const l = LANGS[lang];

    return (
        <Layout title={l.page_about_title}>
            <main className={styles.about}>
                <div className={styles.timeline_container}>

                    <div className={styles.timeline} />

                    <TimeEvent
                        type='study'
                        title={l.path_1_title}
                        period={l.path_1_date}
                        descriptions={[l.path_1_li_1,
                            l.path_1_li_2]}
                    />

                    <TimeEvent
                        type='work'
                        title={l.path_2_title}
                        period={l.path_2_date}
                        descriptions={[l.path_2_li_1, l.path_2_li_2, l.path_2_li_3]}
                    />

                    <TimeEvent
                        type='study'
                        title={l.path_3_title}
                        period={l.path_3_date}
                        descriptions={[l.path_3_li_1, l.path_3_li_2, l.path_3_li_3,]}
                    />

                    <TimeEvent
                        type='work'
                        title={l.path_4_title}
                        period={l.path_4_date}
                        descriptions={[l.path_4_li_1,
                            l.path_4_li_2,
                            l.path_4_li_3,
                            l.path_4_li_4]}
                    />

                    <TimeEvent
                        type='study'
                        title={l.path_5_title}
                        period={l.path_5_date}
                        descriptions={[l.path_5_li_1,
                            l.path_5_li_2, 
                            l.path_5_li_3,
                            l.path_5_li_4,
                            l.path_5_li_5,]}
                    />

                </div>
            </main>
        </Layout>
    )
}

export default About;