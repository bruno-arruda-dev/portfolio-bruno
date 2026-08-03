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
    modalMarkdownFile: '',
    modalMarkdownContent: '',
    activeModal: '', 
    handleUpdateModalContent: () => {}, 
    handleCloseModal: () => {}
})

export const ProjectModalProvider = ({children}: {children: React.ReactNode;}): JSX.Element => {
    const [activeModal, setActiveModal] = useState('hideModal');
    const [modalName, setModalName] = useState<string | undefined>('');
    const [modalDescriptions, setModalDescriptions] = useState<string[] | undefined>([]);
    const [modalRepo, setModalRepo] = useState<string | undefined>('');
    const [modalHomepage, setModalHomepage] = useState<string | undefined>('');
    const [modalImage, setModalImage] = useState<string | undefined>('');
    const [modalStacks, setModalStacks] = useState<string[] | undefined>([]);
    const [modalMarkdownFile, setModalMarkdownFile] = useState<string | undefined>('');
    const [modalMarkdownContent, setModalMarkdownContent] = useState<string | undefined>('');

    const handleUpdateModalContent = (
        name?: string,
        descriptions?: string[],
        repo?: string,
        homepage?: string,
        image?: string,
        stacks?: string[],
        markdownFile?: string,
        markdownContent?: string
    ) => {
        setModalName(name || '');
        setModalDescriptions(descriptions || []);
        setModalRepo(repo || '');
        setModalHomepage(homepage || '');
        setModalImage(image || '');
        setModalStacks(stacks || []);
        setModalMarkdownFile(markdownFile || '');
        setModalMarkdownContent(markdownContent || '');
        setActiveModal('activatedModal');
    }

    const handleCloseModal = () => {
        setActiveModal('disabledModal'); // Usado para exibir animação ao fechar modal.
        
        setTimeout(() => {
            setActiveModal('hideModal'); // Desativa a exibição do modal.
        }, 300)
    }

    return (
        <ProjectModalContext.Provider value={{
            modalName,
            modalDescriptions,
            modalRepo,
            modalHomepage,
            modalImage,
            modalStacks,
            modalMarkdownFile,
            modalMarkdownContent,
            activeModal,
            handleUpdateModalContent,
            handleCloseModal
        }}>
            {children}
        </ProjectModalContext.Provider>
    );
};