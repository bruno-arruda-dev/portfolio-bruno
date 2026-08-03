import { useContext, MouseEvent, useRef, useEffect } from 'react';
import styles from '@/components/ProjectCard/ProjectCard.module.scss';
import { IProjectCardProps } from '@/types/ProjectCardProps';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import { ProjectModalContext } from '@/context/ProjectModalContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsFileEarmarkCodeFill, BsShieldLockFill } from 'react-icons/bs';

const ProjectCard = ({ image, name, descriptions, repo, homepage, stacks, markdownFile, markdownContent }: IProjectCardProps) => {
    const { handleUpdateModalContent } = useContext(ProjectModalContext);
    const thisProject = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(thisProject.current, {
            opacity: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
                trigger: thisProject.current,
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(thisProject.current)
        }

    }, [])

    const sendToProjectModal = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        handleUpdateModalContent(name, descriptions, repo, homepage, image, stacks, markdownFile, markdownContent);
    }

    const hasMarkdown = Boolean(markdownFile || markdownContent);

    return (
        <div className={styles.projectCard} onClick={sendToProjectModal} ref={thisProject}>

            {image ? (
                <div className={styles.img} style={{ backgroundImage: `url('${image}')` }} />
            ) : (
                <div className={styles.noImgHeader}>
                    {hasMarkdown ? (
                        <BsShieldLockFill className={styles.headerIcon} />
                    ) : (
                        <BsFileEarmarkCodeFill className={styles.headerIcon} />
                    )}
                    <span className={styles.headerBadge}>
                        {hasMarkdown ? 'PROJETO NDA / MD' : 'PROJETO'}
                    </span>
                </div>
            )}

            <div className={styles.cardContent}>
                {name && <h3>{name}</h3>}

                {descriptions && descriptions.length > 0 && (
                    <div className={styles.textContainer}>
                        <p>{descriptions[0]}</p>
                    </div>
                )}
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
