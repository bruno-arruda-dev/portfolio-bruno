import styles from '@/styles/Projects.module.scss';
import Layout from "@/components/Layout/Layout";
import allProjects from '@/helpers/allProjects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const Projects = () => {

    return(
        <Layout title='Bruno Arruda: Projetos'>
            <main className={styles.projects}>
                {
                    allProjects.map((project) => (
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