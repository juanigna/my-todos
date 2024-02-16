import prisma from '@/app/lib/prisma'
import { Todo } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from "yup"

interface Segments {
    params: {
        id: string
    }
}

const getTodo = async (id: string): Promise<Todo | null> => {
    const todo = await prisma.todo.findFirst({ where: { id } })
    return todo
}

//Get single todo endpoint

export async function GET(request: Request, { params }: Segments) {
    const todo = await getTodo(params.id)

    if (!todo) return NextResponse.json({ message: 'Todo not found' }, { status: 404 })

    return NextResponse.json({ todo })
}

//Put schema

const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional()
})


//Update a todo endpoint

export async function PUT(request: Request, { params }: Segments) {
    try {
        const todo = await getTodo(params.id)

        if (!todo) return NextResponse.json({ message: 'Todo not found' }, { status: 404 })

        const { complete, description } = await putSchema.validate(await request.json())

        const updatedTodo = await prisma.todo.update({
            where: { id: params.id },
            data: {
                complete,
                description
            }
        })

        return NextResponse.json({ updatedTodo })
    } catch (err) {
        return NextResponse.json({ message: err }, { status: 400 })
    }

}


