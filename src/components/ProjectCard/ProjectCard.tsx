import { useContext, MouseEvent } from 'react'; // Importe o MouseEvent
import styles from '@/components/ProjectCard/ProjectCard.module.scss';
import { IProjectCardProps } from '@/types/ProjectCardProps';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import { ProjectModalContext } from '@/context/ProjectModalContext';

const ProjectCard = ({ image, name, descriptions, repo, homepage, stacks }: IProjectCardProps) => {
    const { handleUpdateModalContent } = useContext(ProjectModalContext);

    const sendToProjectModal = (event: MouseEvent<HTMLDivElement>) => { // Defina o tipo de evento
        event.stopPropagation();
        console.log(`Modal atual: ${name}`);
        handleUpdateModalContent(name, descriptions, repo, homepage, image, stacks);
    }

    return (
        <div className={styles.projectCard} onClick={sendToProjectModal}>

            <div className={styles.img} style={{ backgroundImage: `url('${image}')` }} />
            
            <h3>{name}</h3>
            <div className={styles.textContainer}>
                {
                    descriptions.map((description, index) => (
                        <p key={index}>{description}</p> // Adicione a key para cada <p>
                    ))
                }
            </div>

            <ProjectCardFooter
                repo={repo}
                homepage={homepage}
                stacks={stacks}
            />

        </div>
    )
}

export default ProjectCard;
