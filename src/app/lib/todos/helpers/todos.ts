import { Todo } from "@prisma/client";

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
    const body = {
        complete
    }

    const dbTodo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json())
    console.log(dbTodo)
    return dbTodo;
}


export const createTodo = async (description: string): Promise<Todo> => {
    const body = {
        description
    }

    const dbTodo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json())

    return dbTodo;
}

export const deleteCompletedTodos = async () => {
    const res = await fetch('/api/todos', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json())

    return res
}