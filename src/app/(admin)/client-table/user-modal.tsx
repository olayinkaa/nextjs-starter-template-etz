"use client";
import { Modal } from "@/components/shared/modal";
import useAppStore from "@/stores/app-store";
import { EntityType } from "@/types/enum";
import { useShallow } from "zustand/react/shallow";

export default function UserModal() {
    const { open, handleClose, entity } = useAppStore(
        useShallow((state) => ({
            open: state.isOpen,
            handleClose: state.handleClose,
            formData: state.formData,
            entity: state.entity,
        }))
    );
    return (
        <Modal
            open={open && entity === EntityType.USER_CREATED}
            onClose={handleClose}
            backdrop={false}
            size="xl"
        >
            <Modal.Header>
                <div>
                    <Modal.Title>Developer</Modal.Title>
                    <Modal.Description>Build scalable systems</Modal.Description>
                </div>
                <Modal.Close />
            </Modal.Header>
            <Modal.Content>Body content here</Modal.Content>
            <Modal.Footer>
                <button onClick={handleClose}>Cancel</button>
                <button className="bg-primary rounded px-4 py-2 text-white">Save</button>
            </Modal.Footer>
        </Modal>
    );
}
