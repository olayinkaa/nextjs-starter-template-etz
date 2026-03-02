import { Fragment } from "react";
import { ChildrenProps } from "@/types/base";
import UserModal from "@/app/(admin)/client-table/user-modal";

export default function AppDialogsProvider({ children }: ChildrenProps) {
    return (
        <Fragment>
            {children}
            {/* Insert modals below */}
            <UserModal />
        </Fragment>
    );
}
