import { useContext } from 'react';
import styles from '@/components/ProjectModal/ProjectModal.module.scss';
import { ProjectModalContext } from '@/context/ProjectModalContext';
import { RiCloseCircleFill } from 'react-icons/ri';
import ProjectCardFooter from '../ProjectCard/ProjectCardFooter/ProjectCardFooter';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';

const ProjectModal = () => {
    const {
        modalName,
        modalDescriptions,
        modalRepo,
        modalHomepage,
        modalImage,
        modalStacks,
        modalMarkdownFile,
        modalMarkdownContent,
        handleCloseModal,
        activeModal
    } = useContext(ProjectModalContext);

    const handleActiveModal = () => {
        handleCloseModal();
    }

    const hasMarkdown = Boolean(modalMarkdownFile || modalMarkdownContent);

    return (
        <div className={`${styles[activeModal]}`}>

            <div className={styles.modalContainer}>

                <div className={styles.modalContent}>
                    <button onClick={handleActiveModal}><RiCloseCircleFill /></button>
                    
                    {modalName && <h2>{modalName}</h2>}
                    
                    {modalImage && (
                        <div className={styles.imageContainer} style={{ backgroundImage: `url('${modalImage}')` }} />
                    )}

                    {hasMarkdown ? (
                        <MarkdownRenderer
                            markdownFile={modalMarkdownFile}
                            markdownContent={modalMarkdownContent}
                        />
                    ) : (
                        modalDescriptions && modalDescriptions.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))
                    )}
                </div>

                <ProjectCardFooter repo={modalRepo} homepage={modalHomepage} stacks={modalStacks} />

            </div>

        </div>
    )
}

export default ProjectModal;