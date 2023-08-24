import { createContext, useState } from "react";
import { IProjectModalProps } from "@/types/ProjectModalProps";

export const ProjectModalContext = createContext<IProjectModalProps>({
    // INITIAL STATES VALUES
    modalName: '', 
    modalDescription: '', 
    modalRepo: '', 
    modalHomepage: '', 
    modalImage: '', 
    activeModal: '', 
    handleUpdateModalContent: () => {}, 
    handleCloseModal: () => {}
})

export const ProjectModalProvider = ({children}: {children: React.ReactNode;}): JSX.Element => {
    const [activeModal, setActiveModal] = useState('hideModal');
    const [modalName, setModalName] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const [modalRepo, setModalRepo] = useState('');
    const [modalHomepage, setModalHomepage] = useState('');
    const [modalImage, setModalImage] = useState('');

    const handleUpdateModalContent = (name: string, description: string, repo?: string, homepage?: string, image?: string) => {
        setModalName(name);
        setModalDescription(description);
        repo ? setModalRepo(repo) : setModalRepo('');
        homepage ? setModalHomepage(homepage) : setModalHomepage('');
        image ? setModalImage(image) : setModalImage('');
        setActiveModal('activatedModal');
        console.log(`Atualizou o modal no contexto: ${name}`);
    }

    const handleCloseModal = () => {
        setActiveModal('disabledModal'); // Usado para exibir animação ao fechar modal.
        console.log(`Clicou para fechar o modal ${activeModal}`);
        
        setTimeout(() => {
            setActiveModal('hideModal'); // Desativa a exibição do mobal.
        }, 1000)

    }

    return (
        <ProjectModalContext.Provider value={{ modalName, modalDescription, modalRepo, modalHomepage, modalImage, activeModal, handleUpdateModalContent, handleCloseModal }}>
            {children}
        </ProjectModalContext.Provider>
    );
};