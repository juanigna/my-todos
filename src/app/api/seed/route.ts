import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {
    await prisma.todo.deleteMany() //Delete all

    await prisma.todo.createMany({
        data: [
            { description: 'Piedra del alma', complete: true },
            { description: 'Piedra del poder', complete: true },
            { description: 'Piedra del espacio', },
            { description: 'Piedra del tiempo', },
            { description: 'Piedra de la realidad', },
        ]
    })

    return NextResponse.json({ message: 'Seed Execute!' })
}