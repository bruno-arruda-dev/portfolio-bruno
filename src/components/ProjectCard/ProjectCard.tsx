import { useContext, MouseEvent, useRef, useLayoutEffect } from 'react'; // Importe o MouseEvent
import styles from '@/components/ProjectCard/ProjectCard.module.scss';
import { IProjectCardProps } from '@/types/ProjectCardProps';
import ProjectCardFooter from './ProjectCardFooter/ProjectCardFooter';
import { ProjectModalContext } from '@/context/ProjectModalContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ProjectCard = ({ image, name, descriptions, repo, homepage, stacks }: IProjectCardProps) => {
    const { handleUpdateModalContent } = useContext(ProjectModalContext);
    const thisProject = useRef(null);

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(thisProject.current, {
            opacity: 1,
            x: 0,
            y: 0,
            scrollTrigger: {
                trigger: thisProject.current,
                // markers: true,
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
        console.log(`Modal atual: ${name}`);
        handleUpdateModalContent(name, descriptions, repo, homepage, image, stacks);
    }

    return (
        <div className={styles.projectCard} onClick={sendToProjectModal} ref={thisProject}>

            <div className={styles.img} style={{ backgroundImage: `url('${image}')` }} />

            <h3>{name}</h3>
            <div className={styles.textContainer}>
                {
                    descriptions.map((description, index) => (
                        <p key={index}>{description}</p>
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
