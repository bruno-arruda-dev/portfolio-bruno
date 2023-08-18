import styles from '@/components/ProjectCard/ProjectCard.module.scss';
import { IProjectCardProps } from '@/types/ProjectCardProps';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';

const ProjectCard = ({ image, name, description, repo, homepage }: IProjectCardProps) => {
    return(
        <div className={styles.projectCard}>
            <div className={styles.img} style={{ backgroundImage: `url('${image}')` }} />
            <h3>{name}</h3>
            <p>{description}</p>

            <ProjectCardFooter
                repo={repo}
                homepage={homepage}
            />

        </div>
    )
}

export default ProjectCard;