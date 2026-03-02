import { ModalHeader, ModalTitle, ModalDescription } from "./modal-header";
import { ModalContent } from "./modal-content";
import { ModalFooter } from "./modal-footer";
import { ModalClose } from "./modal-close";
import { ModalRoot } from "./ modal-root";

/* Compound Attachment */
export const Modal = Object.assign(ModalRoot, {
    Header: ModalHeader,
    Title: ModalTitle,
    Description: ModalDescription,
    Content: ModalContent,
    Footer: ModalFooter,
    Close: ModalClose,
});
