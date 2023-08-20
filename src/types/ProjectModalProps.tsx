export interface IProjectModalProps {
    modalName: string,
    modalDescription: string,
    modalRepo?: string,
    modalHomepage?: string,
    modalImage?: string,
    activeModal: boolean,
    handleUpdateModalContent: (name: string, description: string, repo?: string, homepage?: string, image?: string) => void,
    handleCloseModal: () => void,
}