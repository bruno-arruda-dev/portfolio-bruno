import { useContext } from 'react';
import styles from '@/components/ProjectModal/ProjectModal.module.scss';
import { ProjectModalContext } from '@/context/ProjectModalContext';
import {RiCloseCircleFill} from 'react-icons/ri';

const ProjectModal = () => {
    const { modalName, modalDescription, modalRepo, modalHomepage, modalImage, handleCloseModal, activeModal } = useContext(ProjectModalContext);

    const handleActiveModal = () => {
        handleCloseModal();
    }


    return (
        <div className={`${styles[activeModal]}`}>
            
            <div className={styles.modalContent}>
                <button onClick={handleActiveModal}><RiCloseCircleFill /></button>
                {modalName} - {modalDescription} - {modalRepo} - {modalHomepage} - {modalImage}
            </div>

        </div>
    )
}

export default ProjectModal;