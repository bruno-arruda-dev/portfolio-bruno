import styles from '@/styles/Projects.module.scss';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
    const { t } = useTranslation('projects');
    const projects = t('projects', { returnObjects: true });
    const projectsList = Array.isArray(projects) ? projects : [];

    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.sectionTitle}>{t('page_projects_title', { ns: 'common' })}</h2>
            {
                projectsList.map((project, index) => (
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
