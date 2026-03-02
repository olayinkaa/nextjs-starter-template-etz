import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

const userTypes = ["admin", "initiator", "auditor", "authorizer", "viewer"];
function createRandomUser() {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        designation: faker.person.jobTitle(),
        userType: faker.helpers.arrayElement(userTypes),
    };
}

export async function GET() {
    const users = faker.helpers.multiple(createRandomUser, {
        count: 30,
    });
    return NextResponse.json(users);
}
