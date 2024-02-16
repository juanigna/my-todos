"use server"

import { Todo } from "@prisma/client"
import prisma from "../lib/prisma"
import { revalidatePath } from "next/cache"

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const todo = await prisma.todo.findFirst({ where: { id } })

    if (!todo) throw 'Todo not found'

    const updatedTodo = await prisma.todo.update({
        where: { id },
        data: {
            complete
        }
    })

    revalidatePath('/dashboard/server-todos')

    return updatedTodo
}

export const addTodo = async (description: string) => {

    try {


        const todo = await prisma.todo.create({
            data: { description }
        })
        revalidatePath('/dashboard/server-todos')

        return todo

    } catch (err) {
        return {
            message: 'Error creando todo.'
        }
    }
}

export const deleteCompletedTodos = async () => {
    await fetch('http://localhost:3000/api/todos', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json())
    revalidatePath('/dashboard/server-todos')
}