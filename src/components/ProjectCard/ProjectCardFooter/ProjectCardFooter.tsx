import { MouseEvent } from 'react'; // Importe o MouseEvent
import styles from '@/components/ProjectCard/ProjectCardFooter/ProjectCardFooter.module.scss';
import { IProjectCardFooterProps } from '@/types/ProjectCardFooterProps';
import { FaGithubAlt } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';

const ProjectCardFooter = ({ repo, homepage, stacks }: IProjectCardFooterProps) => {

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
    }

    const hasStacks = stacks && stacks.length > 0;
    const hasActions = Boolean(repo || homepage);

    if (!hasStacks && !hasActions) {
        return null;
    }

    return (
        <div className={styles.projectCardFooter}>

            {hasActions && (
                <div className={styles.actions}>
                    {repo && (
                        <a
                            className={styles['active']}
                            href={repo}
                            onClick={handleLinkClick}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithubAlt />
                        </a>
                    )}
                    {homepage && (
                        <a
                            className={styles['active']}
                            href={homepage}
                            onClick={handleLinkClick}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <ImHome />
                        </a>
                    )}
                </div>
            )}

            {hasStacks && (
                <div className={styles.stacks}>
                    {
                        stacks?.map((stack, index) => (
                            <div key={index} className={`${styles['stack']} ${styles[stack]}`}>
                                {stack}
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default ProjectCardFooter;
