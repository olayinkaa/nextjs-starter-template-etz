import { EntityType } from "@/types/enum";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TState = {
    isOpen: boolean;
    isEditMode: boolean;
    formData: any;
    entity: EntityType | "";
};

type TAction = {
    handleOpen: (entity: EntityType) => void;
    handleClose: () => void;
    handleEdit: ({ data, entity }: { data: any; entity: EntityType }) => void;
    handleRefreshData: ({ data }: { data: any }) => void;
};

const initialState: TState = {
    isOpen: false,
    isEditMode: false,
    formData: {},
    entity: "",
};

const useAppStore = create<TState & TAction>()(
    immer((set) => ({
        ...initialState,
        handleOpen: (entity) =>
            set((state) => {
                state.isOpen = true;
                state.entity = entity;
            }),
        handleClose: () =>
            set((state) => {
                state.isOpen = false;
                state.formData = {};
                state.isEditMode = false;
                state.entity = "";
            }),
        handleEdit: ({ data, entity }) => {
            set((state) => {
                state.isOpen = true;
                state.isEditMode = true;
                state.formData = data;
                state.entity = entity;
            });
        },
        handleRefreshData: ({ data }: any) => {
            set((state) => {
                return {
                    ...state,
                    formData: data, //
                };
            });
        },
    }))
);

export default useAppStore;
