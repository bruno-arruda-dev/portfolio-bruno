import { MouseEvent } from 'react'; // Importe o MouseEvent
import styles from '@/components/ProjectCard/ProjectCardFooter/ProjectCardFooter.module.scss';
import { IProjectCardFooterProps } from '@/types/ProjectCardFooterProps';
import { FaGithubAlt } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';

const ProjectCardFooter = ({ repo, homepage, stacks }: IProjectCardFooterProps) => {

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => { // Defina o tipo de evento
        event.stopPropagation();
    }

    return (
        <div className={styles.projectCardFooter}>

            <div className={styles.stacks}>
                {
                    stacks?.map((stack, index) => (
                        <div key={index} className={`${styles['stack']} ${styles[stack]}`}>
                            {stack}
                        </div>
                    ))
                }
            </div>

            <div className={styles.actions}>
                <a
                    className={repo ? `${styles['active']}` : `${styles['disabled']}`}
                    href={repo}
                    onClick={handleLinkClick}
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <FaGithubAlt />
                </a>
                <a
                    className={homepage ? `${styles['active']}` : `${styles['disabled']}`}
                    href={homepage}
                    onClick={handleLinkClick}
                    target='_blank'
                    rel='noopener noreferer'
                >
                    <ImHome />
                </a>
            </div>

        </div>
    )
}

export default ProjectCardFooter;
