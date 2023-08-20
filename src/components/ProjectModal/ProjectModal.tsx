import { useContext } from 'react';
import styles from '@/components/ProjectModal/ProjectModal.module.scss';
import { ProjectModalContext } from '@/context/ProjectModalContext';

const ProjectModal = () => {
    const { modalName, modalDescription, modalRepo, modalHomepage, modalImage, handleCloseModal } = useContext(ProjectModalContext);

    const handleActiveModal = () => {
        console.log('Clicou no modal');
        handleCloseModal();
    }

    return (
        <div className={styles.projectModal}>
            <div className={styles.modalContent}>
                <button onClick={handleActiveModal}>X</button>
                {modalName} - {modalDescription} - {modalRepo} - {modalHomepage} - {modalImage}
            </div>
        </div>
    )
}

export default ProjectModal;