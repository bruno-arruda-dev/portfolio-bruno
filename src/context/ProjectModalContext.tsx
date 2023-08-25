import { createContext, useState } from "react";
import { IProjectModalProps } from "@/types/ProjectModalProps";

export const ProjectModalContext = createContext<IProjectModalProps>({
    // INITIAL STATES VALUES
    modalName: '', 
    modalDescriptions: [], 
    modalRepo: '', 
    modalHomepage: '', 
    modalImage: '', 
    modalStacks: [],
    activeModal: '', 
    handleUpdateModalContent: () => {}, 
    handleCloseModal: () => {}
})

export const ProjectModalProvider = ({children}: {children: React.ReactNode;}): JSX.Element => {
    const [activeModal, setActiveModal] = useState('hideModal');
    const [modalName, setModalName] = useState('');
    const [modalDescriptions, setModalDescriptions] = useState<string[]>([]);
    const [modalRepo, setModalRepo] = useState('');
    const [modalHomepage, setModalHomepage] = useState('');
    const [modalImage, setModalImage] = useState('');
    const [modalStacks, setModalStacks] = useState<string[]>([]);

    const handleUpdateModalContent = (name: string, descriptions: string[], repo?: string, homepage?: string, image?: string, stacks?: string[]) => {
        setModalName(name);
        setModalDescriptions(descriptions);
        repo ? setModalRepo(repo) : setModalRepo('');
        homepage ? setModalHomepage(homepage) : setModalHomepage('');
        image ? setModalImage(image) : setModalImage('');
        stacks? setModalStacks(stacks) : setModalStacks([]);
        console.log(`Atualizou as stacks ${modalStacks}`)
        setActiveModal('activatedModal');
        console.log(`Atualizou o modal no contexto: ${name}`);
    }

    const handleCloseModal = () => {
        setActiveModal('disabledModal'); // Usado para exibir animação ao fechar modal.
        console.log(`Clicou para fechar o modal ${activeModal}`);
        
        setTimeout(() => {
            setActiveModal('hideModal'); // Desativa a exibição do mobal.
        }, 300)

    }

    return (
        <ProjectModalContext.Provider value={{ modalName, modalDescriptions, modalRepo, modalHomepage, modalImage, modalStacks, activeModal, handleUpdateModalContent, handleCloseModal }}>
            {children}
        </ProjectModalContext.Provider>
    );
};