import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;
    const response = NextResponse.next();


    return response;
}
