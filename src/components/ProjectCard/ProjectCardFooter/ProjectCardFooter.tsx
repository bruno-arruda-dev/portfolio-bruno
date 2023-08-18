import styles from '@/components/ProjectCard/ProjectCardFooter/ProjectCardFooter.module.scss';
import { IProjectCardFooterProps } from '@/types/ProjectCardFooterProps';
import { FaGithubAlt } from 'react-icons/fa';
import { ImHome } from 'react-icons/im';

const ProjectCardFooter = ({ repo, homepage }: IProjectCardFooterProps) => {

    return (
        <div className={styles.projectCardFooter}>

            <a className={repo ? `${styles['active']}` : `${styles['disabled']}`} href={repo}>
                <FaGithubAlt />
            </a>

            <a className={homepage ? `${styles['active']}` : `${styles['disabled']}`} href={homepage}>
                <ImHome />
            </a>

        </div>
    )
}

export default ProjectCardFooter;