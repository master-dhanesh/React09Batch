import { NextResponse } from "next/server";
export async function GET(request) {
    const data = {
        id: "iusahff983",
        name: "John Doe",
        skill: "Full Stack Developer",
    };

    return NextResponse.json(data);
}

export async function POST(request) {
    try {
        const res = await request.json();

        return NextResponse.json({
            message: "Route Hit",
            res,
        });
    } catch (error) {
        return NextResponse(error);
    }
}
