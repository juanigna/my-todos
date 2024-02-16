import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    return NextResponse.json({
        userId: 10
    })
}

export async function POST(request: Request) {

    const body = await request.json()
    console.log(body)

    return NextResponse.json({
        body
    })
}