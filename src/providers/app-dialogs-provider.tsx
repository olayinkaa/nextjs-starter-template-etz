import { Fragment } from "react";
import { ChildrenProps } from "@/types/base";
import UserModal from "@/app/(private)/(main)/dashboard/user-modal";

export default function AppDialogsProvider({ children }: ChildrenProps) {
    return (
        <Fragment>
            {children}
            {/* Insert modals below */}
            <UserModal />
        </Fragment>
    );
}
