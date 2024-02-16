"use client"

import { Todo } from "@prisma/client"
import { TodoItem } from "."
import { useRouter } from "next/navigation"
import { toggleTodo } from "@/app/actions/todo-actions"

interface Props {
    todos?: Todo[]
}

const TodosGrid = ({ todos = [] }: Props) => {
    return (
        <div className="grid grid-cols-1  sm:grid-cols-3 gap-2">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))
            }
        </div>
    )
}

export default TodosGrid