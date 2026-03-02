import Container from "@/components/shared/container";
import { Suspense } from "react";
import UserTable from "./user-table";

const fetchUsers = async () => {
    const res = await fetch("http://localhost:3025/api/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
};

const usersPromise = fetchUsers();

export default function UserPage() {
    return (
        <div>
            <Container className="mt-10">
                <h1 className="text-2xl font-bold">User</h1>
                <Suspense fallback={<p>Loading users...</p>}>
                    <UserTable promise={usersPromise} />
                </Suspense>
            </Container>
        </div>
    );
}
