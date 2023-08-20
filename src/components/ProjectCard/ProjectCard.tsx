import {useContext} from 'react';
import styles from '@/components/ProjectCard/ProjectCard.module.scss';
import { IProjectCardProps } from '@/types/ProjectCardProps';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import {ProjectModalContext} from '@/context/ProjectModalContext';

const ProjectCard = ({ image, name, description, repo, homepage }: IProjectCardProps) => {
    const {handleUpdateModalContent} = useContext(ProjectModalContext);

    const sendToProjectModal = () => {
        console.log(`Modal atual: ${name}`);
        handleUpdateModalContent(name, description, repo, homepage, image);
    }

    return(
        <div className={styles.projectCard} onClick={sendToProjectModal}>

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