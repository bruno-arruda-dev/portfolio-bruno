import { useContext } from 'react';
import styles from '@/styles/Projects.module.scss';
import ALL_PROJECTS from '@/locales/allProjects';
import LANG from '@/locales/allLang';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { LangContext } from '@/context/LangContext';

const ProjectsSection = () => {
    const { lang } = useContext(LangContext);
    const l = ALL_PROJECTS[lang];

    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.sectionTitle}>{LANG[lang].page_projects_title}</h2>
            {
                l.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        name={project.name}
                        descriptions={project.descriptions}
                        repo={project.repo}
                        homepage={project.homepage}
                        stacks={project.stacks}
                    />
                ))
            }

            <div className={styles.spacer}/>
        </section>
    );
};

export default ProjectsSection;
