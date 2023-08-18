import styles from '@/components/ProjectCard/ProjectCard.module.scss';
import { IProjectCardProps } from '@/types/ProjectCardProps';

const ProjectCard = ({ image, name, description, repo, homepage }: IProjectCardProps) => {
    return(
        <div className={styles.projectCard}>
            <div className={styles.img} style={{ backgroundImage: `url(${image})` }} />
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={repo}>Repositório</a>
            <a href={homepage}>HomePage</a>
        </div>
    )
}

export default ProjectCard;