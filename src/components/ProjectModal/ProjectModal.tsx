import { useContext } from 'react';
import styles from '@/components/ProjectModal/ProjectModal.module.scss';
import { ProjectModalContext } from '@/context/ProjectModalContext';
import { RiCloseCircleFill } from 'react-icons/ri';
import ProjectCardFooter from '../ProjectCard/ProjectCardFooter/ProjectCardFooter';

const ProjectModal = () => {
    const { modalName, modalDescriptions, modalRepo, modalHomepage, modalImage, modalStacks, handleCloseModal, activeModal } = useContext(ProjectModalContext);

    const handleActiveModal = () => {
        handleCloseModal();
    }


    return (
        <div className={`${styles[activeModal]}`}>

            <div className={styles.modalContainer}>

                <div className={styles.modalContent}>
                    <button onClick={handleActiveModal}><RiCloseCircleFill /></button>
                    <h2>{modalName}</h2>
                    <div className={styles.imageContainer} style={{ backgroundImage: `url('${modalImage}')` }} />
                    {modalDescriptions.map((description, index) => (
                        <p>{description}</p>
                    ))}
                </div>

                <ProjectCardFooter repo={modalRepo} homepage={modalHomepage} stacks={modalStacks} />

            </div>

        </div>
    )
}

export default ProjectModal;