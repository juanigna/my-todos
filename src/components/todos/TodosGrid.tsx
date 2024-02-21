"use client"

import { Todo } from "@prisma/client"
import { TodoItem } from "."
import { toggleTodo } from "@/app/actions/todo-actions"

interface Props {
    todos?: Todo[]
}

const TodosGrid = ({ todos = [] }: Props) => {
    return (
        <div className="grid grid-cols-1  sm:grid-cols-3 gap-2">
            {   
                todos.length !== 0 ? (
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))
                ) : (
                    <div>
                        <p>No hay tareas pendientes, <span className="text-blue-400">crea una nueva</span></p>
                    </div>
                )
            }
        </div>
    )
}

export default TodosGrid