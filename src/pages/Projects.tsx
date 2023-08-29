import { useContext } from 'react';
import styles from '@/styles/Projects.module.scss';
import Layout from "@/components/Layout/Layout";
import ALL_PROJECTS from '@/locales/allProjects';
import LANG from '@/locales/allLang';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { LangContext } from '@/context/LangContext';

const Projects = () => {
    const {lang} = useContext(LangContext);
    const l = ALL_PROJECTS[lang];

    return (
        <Layout title={LANG[lang].page_projects_title}>
            <main className={styles.projects}>
                {
                    l.map((project) => (
                        <ProjectCard
                            image={project.image}
                            name={project.name}
                            descriptions={project.descriptions}
                            repo={project.repo}
                            homepage={project.homepage}
                            stacks={project.stacks}
                        />
                    ))
                }
            </main>
        </Layout>
    )
}

export default Projects;