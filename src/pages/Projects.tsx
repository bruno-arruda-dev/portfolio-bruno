import styles from '@/styles/Projects.module.scss';
import Layout from "@/components/Layout/Layout";
import allProjects from '@/helpers/allProjects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const Projects = () => {
    return(
        <Layout>
            <main className={styles.projects}>
                {
                    allProjects.map((project) => (
                        <ProjectCard 
                            image={project.image}
                            name={project.name}
                            description={project.description}
                            repo={project.repo}
                            homepage={project.homepage}
                        />
                    ))
                }
            </main>
        </Layout>
    )
}

export default Projects;