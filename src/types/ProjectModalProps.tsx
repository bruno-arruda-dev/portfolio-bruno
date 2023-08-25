export interface IProjectModalProps {
    modalName: string,
    modalDescriptions: string[],
    modalRepo?: string,
    modalHomepage?: string,
    modalImage?: string,
    modalStacks: string[],
    activeModal: string,
    handleUpdateModalContent: (name: string, descriptions: string[], repo?: string, homepage?: string, image?: string, stacks?: string[]) => void,
    handleCloseModal: () => void,
}